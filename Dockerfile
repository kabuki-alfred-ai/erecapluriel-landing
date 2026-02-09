FROM node:20-slim

# Install Git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Clone repo
RUN git clone https://github.com/kabuki-alfred-ai/erecapluriel-landing.git .

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the production server
CMD ["npm", "run", "start"]