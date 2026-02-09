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

# Ensure dist directory exists
RUN mkdir -p dist && ls -la dist/

# Production stage
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY --from=builder /app/package*.json ./

# Copy built application
COPY --from=builder /app/dist ./dist

# Copy node_modules
COPY --from=builder /app/node_modules ./node_modules

# Copy public if exists
COPY --from=builder /app/public ./public 2>/dev/null || echo "No public folder"

# Copy next.config
COPY --from=builder /app/next.config.* ./ 2>/dev/null || echo "No next.config"

# Verify dist exists
RUN ls -la dist/ || echo "WARNING: dist not found"

EXPOSE 3000

CMD ["npm", "run", "start"]
