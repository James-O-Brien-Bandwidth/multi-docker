# Production docker file
FROM node:20-alpine

WORKDIR /app

# Install deps from lockfile
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# CRA in Docker niceties
ENV HOST=0.0.0.0
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 3000

# only diff from the dev dockerfile is we swap out "dev" for "start". This is a reference to package.json
CMD ["npm", "run", "start"]
