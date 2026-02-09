# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Clone repository
RUN git clone https://github.com/kabuki-alfred-ai/erecapluriel-landing.git .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY --from=builder /app/package*.json ./

# Copy built application
COPY --from=builder /app/dist ./dist

# Copy node_modules
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
