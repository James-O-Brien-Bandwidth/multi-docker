const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
  ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : false,
});

pgClient.on("connect", (client) => {
  client
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch((err) => console.error(err));
});

// Redis Client Setup
const redis = require("redis");
const redisClient = redis.createClient({
  url: `redis://${keys.redisHost}:${keys.redisPort}`,
  retry_strategy: () => 1000,
});
const redisPublisher = redisClient.duplicate();

(async () => {
  try {
    await redisClient.connect();
    await redisPublisher.connect();
    console.log("Redis connected successfully");
  } catch (err) {
    console.error("Redis connection failed:", err.message);
  }
})();

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/values/all", async (req, res) => {
  try {
    const values = await pgClient.query("SELECT * from values");
    res.send(values.rows);
  } catch (err) {
    console.error("GET /values/all error:", err.message);
    res.status(500).send("Database error");
  }
});

app.get("/values/current", async (req, res) => {
  try {
    const values = await redisClient.hGetAll("values");
    res.send(values);
  } catch (err) {
    console.error("GET /values/current error:", err.message);
    res.status(500).send("Redis error");
  }
});

app.post("/values", async (req, res) => {
  const index = req.body.index;

  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high");
  }

  try {
    await redisClient.hSet("values", index, "Nothing yet!");
    await redisPublisher.publish("insert", index);
    pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);
    res.send({ working: true });
  } catch (err) {
    console.error("POST /values error:", err.message);
    res.status(500).send("Server error");
  }
});

app.listen(5000, (err) => {
  console.log("Listening");
});
