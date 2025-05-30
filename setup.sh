#!/bin/bash

# The Wonder Minds - Setup Script
echo "🌟 Setting up The Wonder Minds project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
elif command -v pnpm &> /dev/null; then
    pnpm install
else
    npm install
fi

echo "✅ Dependencies installed successfully!"

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOL
# The Wonder Minds Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOL
    echo "✅ .env.local created"
fi

echo ""
echo "🚀 Setup complete! To start the development server, run:"
echo ""
echo "   npm run dev"
echo "   # or"
echo "   yarn dev"
echo "   # or"
echo "   pnpm dev"
echo ""
echo "📱 Open http://localhost:3000 in your browser"
echo ""
echo "🎉 Happy coding!"
