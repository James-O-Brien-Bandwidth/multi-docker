FROM node:16-alpine AS builder

WORKDIR /app

# Install deps from client's package.json
COPY client/package*.json ./
RUN npm install

# Copy client source
COPY client/. .
RUN npm run build

FROM nginx:alpine

# Copy built static files from builder
COPY --from=builder /app/build /usr/share/nginx/html
