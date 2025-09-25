# Portfolio Template

A modern, responsive portfolio template built with React, TypeScript, and Tailwind CSS.

## 🚀 Super Quick Start (3 Steps!)

1. **Click "Use this template"** → Create new repository
2. **Clone your repo** → `git clone https://github.com/yourusername/your-repo.git`
3. **Run setup** → `cd your-repo && npm install && npm run setup`

That's it! Your portfolio is ready at `http://localhost:5173`

## ✨ Features

- 🎨 **Modern Design** - Clean and professional layout
- 📱 **Responsive** - Works perfectly on all devices
- 🌐 **Multi-language** - English & Indonesian support
- 🌙 **Dark/Light Mode** - Smooth theme transitions
- ⚡ **Fast Loading** - Built with Vite
- 🎭 **Animations** - Framer Motion integration

## 🎨 Customize Your Portfolio

After running `npm run setup`, just replace these files:

- **`public/profile.jpg`** → Your photo
- **`public/cv/yourname_cv.pdf`** → Your CV
- **`public/logos/`** → Company logos
- **`public/thumbnails/`** → Project images

Edit content in `src/data/` files for your information.

## 🚀 Deploy (Choose One)

### Option 1: Vercel (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy! ✨

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Deploy! ✨

### Option 3: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select "GitHub Actions"
4. Add `.github/workflows/deploy.yml` (see below)

## 📄 GitHub Pages Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

---

**Made with ❤️ for developers**