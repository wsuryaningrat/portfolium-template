# Quick Start Guide

Get your portfolio up and running in 5 minutes! 🚀

## Step 1: Clone and Install

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
npm install
```

## Step 2: Run Setup Script

```bash
npm run setup
```

This will ask you a few questions and automatically update your personal information.

## Step 3: Add Your Assets

Replace these placeholder files with your own:

- `public/profile.jpg` - Your profile photo
- `public/YourName_CV.pdf` - Your CV/resume
- `public/logos/` - Company/university logos
- `public/thumbnails/` - Project thumbnails

## Step 4: Customize Content

Edit these files to add your information:

- `src/data/profile.json` - Main profile data
- `src/data/en.json` - English content
- `src/data/id.json` - Indonesian content

## Step 5: Start Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## Step 6: Deploy

### GitHub Pages

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Run `npm run deploy`

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **Vercel**: Import your project
- **Firebase**: Upload the `dist` folder

## Need Help?

- Check the full [README.md](README.md) for detailed instructions
- Open an [issue](https://github.com/yourusername/portfolio-template/issues) if you need help
- Customize the design in `src/styles/globals.css` and `tailwind.config.js`

Happy coding! 🎉
