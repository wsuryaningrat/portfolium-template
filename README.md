# Portfolio Template

A modern, responsive portfolio template built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional layout
- 📱 **Responsive** - Works perfectly on all devices
- 🌐 **Multi-language** - English & Indonesian support
- 🌙 **Dark/Light Mode** - Smooth theme transitions
- ⚡ **Fast Loading** - Built with Vite
- 🎭 **Animations** - Framer Motion integration
- 🔧 **Easy Setup** - Interactive configuration script

## 🚀 Quick Start

1. **Clone the template**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run setup script**
   ```bash
   npm run setup
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173`

## 📁 Project Structure

```
portfolio-template/
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── data/          # Content files (profile, translations)
│   ├── styles/        # Global styles
│   └── config/        # Site configuration
├── public/            # Static assets
│   ├── cv/           # CV/Resume files
│   ├── logos/        # Company/University logos
│   └── thumbnails/   # Project thumbnails
└── scripts/          # Utility scripts
```

## 🎨 Customization

### 1. Personal Information
Edit `src/data/profile.json` with your details:
- Name, roles, and pitch
- Work experience and education
- Projects and achievements
- Contact information

### 2. Content Translation
- `src/data/en.json` - English content
- `src/data/id.json` - Indonesian content

### 3. Assets
Replace placeholder files in `public/`:
- `profile.jpg` - Your profile photo
- `cv/yourname_cv.pdf` - Your CV/resume
- `logos/` - Company/university logos
- `thumbnails/` - Project thumbnails

### 4. Styling
- `src/styles/globals.css` - Global styles
- `tailwind.config.js` - Tailwind configuration

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as source
4. Create `.github/workflows/deploy.yml`:

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

### Other Platforms
- **Vercel**: Import your GitHub repository
- **Netlify**: Connect your GitHub repository
- **Firebase**: Upload the `dist` folder

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ for developers**