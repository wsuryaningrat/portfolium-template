#!/bin/bash

# Portfolio Template - Quick Start Script
# This script helps you get started with the portfolio template

echo "🎨 Portfolio Template - Quick Start"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the portfolio template directory"
    echo "   Make sure you've cloned the template first"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🔧 Running setup script..."
npm run setup

if [ $? -ne 0 ]; then
    echo "❌ Setup failed"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Replace images in public/ folder with your own"
echo "2. Add your CV to public/cv/yourname_cv.pdf"
echo "3. Run 'npm run dev' to see your portfolio!"
echo "4. Deploy to Vercel/Netlify when ready"
echo ""
echo "Happy coding! 🚀"
