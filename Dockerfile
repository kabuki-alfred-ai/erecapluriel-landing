# Multi-stage build for Next.js 15
FROM node:20-slim AS builder

# Install Git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Clone the repository
RUN git clone https://github.com/kabuki-alfred-ai/erecapluriel-landing.git .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Create public folder if it doesn't exist
RUN mkdir -p public

# Production stage
FROM node:20-slim

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start production server
CMD ["npm", "run", "start"]
