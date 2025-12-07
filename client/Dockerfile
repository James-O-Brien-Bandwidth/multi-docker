FROM node:20-alpine

WORKDIR /app

# Install deps from lockfile
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build process for building production assets. new 'build' folder will be generated with path /app/build
RUN npm run build

# CRA in Docker niceties
FROM nginx
#ENV HOST=0.0.0.0
#ENV CHOKIDAR_USEPOLLING=true
EXPOSE 3000
# overwrite default nginx website with our build folder
COPY ./nginx/default.conf etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

CMD ["npm", "run", "start"]
