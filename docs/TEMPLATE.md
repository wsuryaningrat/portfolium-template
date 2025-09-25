# Portfolium Template

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### 1. Clone the Template
```bash
git clone https://github.com/wsuryaningrat/portfolium-template.git
cd portfolium-template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Template Setup (Recommended)
```bash
npm run template-setup
```
This interactive script will help you customize the template with your information.

### 4. Start Development
```bash
npm run dev
```

## 📁 Template Structure

```
portfolium-template/
├── config/                 # Template configuration
│   └── template.config.js  # Template metadata
├── scripts/               # Utility scripts
│   ├── setup.js          # Original setup script
│   └── template-setup.js # Interactive setup script
├── src/
│   ├── components/        # Reusable UI components
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── data/            # Content data files
│   │   ├── profile.json  # Main profile information
│   │   ├── en.json      # English content
│   │   └── id.json      # Indonesian content
│   ├── config/          # Site configuration
│   │   └── site.ts      # Site settings
│   └── styles/          # Global styles
└── public/              # Static assets
    ├── logos/          # Company/university logos
    ├── thumbnails/     # Project thumbnails
    └── profile.jpg     # Profile photo
```

## 🎨 Customization

### Content Customization

1. **Profile Information** (`src/data/profile.json`)
   - Update name, roles, pitch, and about section
   - Modify work experience, education, projects, and achievements

2. **Multi-language Content**
   - Edit `src/data/en.json` for English content
   - Edit `src/data/id.json` for Indonesian content

3. **Site Configuration** (`src/config/site.ts`)
   - Update site URL, social links, and metadata

### Visual Customization

1. **Images** (`public/` folder)
   - Replace `profile.jpg` with your photo
   - Add company/university logos to `public/logos/`
   - Add project thumbnails to `public/thumbnails/`

2. **Styling** (`src/styles/globals.css`)
   - Customize colors, fonts, and global styles
   - Modify Tailwind configuration in `tailwind.config.js`

### Component Customization

- **Hero Section** (`src/sections/Hero.tsx`) - Landing area
- **About Section** (`src/sections/About.tsx`) - Personal description
- **Work Section** (`src/sections/Work.tsx`) - Work experience
- **Projects Section** (`src/sections/Projects.tsx`) - Featured projects
- **Skills Section** (`src/sections/Skills.tsx`) - Technical skills
- **Contact Section** (`src/sections/Contact.tsx`) - Contact information

## 🛠️ Available Scripts

- `npm run template-setup` - Interactive template customization
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🌟 Features

- ✅ **Modern Design** - Clean, professional layout
- ✅ **Responsive** - Works on all devices
- ✅ **Multi-language** - English & Indonesian support
- ✅ **Dark/Light Mode** - Smooth theme transitions
- ✅ **Animations** - Framer Motion integration
- ✅ **SEO Optimized** - Meta tags and structure
- ✅ **Fast Loading** - Built with Vite
- ✅ **Easy Customization** - JSON-based content
- ✅ **Project Thumbnails** - Support for GIF animations
- ✅ **Professional Components** - Timeline, tooltips, modals

## 📱 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Deployment

### GitHub Pages
1. Update `homepage` in `package.json`
2. Update URL in `src/config/site.ts`
3. Run `npm run deploy`

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **Vercel**: Import your project
- **Firebase Hosting**: Use Firebase CLI

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ by [Your Name](https://github.com/yourusername)**
