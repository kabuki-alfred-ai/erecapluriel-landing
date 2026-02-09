#!/bin/sh
set -e

echo "🚀 Starting ERECApluriel Landing Page..."

# Install git if not present
if ! command -v git &> /dev/null; then
    echo "📦 Installing git..."
    apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
fi

# Check if we need to clone/build
if [ ! -f "/app/dist/server.js" ] && [ ! -d "/app/dist" ]; then
    echo "📁 Cleaning /app directory..."
    rm -rf /app/* /app/.* 2>/dev/null || true
    
    echo "📥 Cloning repository..."
    git clone https://github.com/kabuki-alfred-ai/erecapluriel-landing.git .
    
    echo "📦 Installing dependencies..."
    npm install
    
    echo "🔨 Building application..."
    npm run build
    
    echo "✅ Build completed!"
else
    echo "✅ Build already exists, skipping..."
fi

echo "🌐 Starting server..."
exec npm run start
