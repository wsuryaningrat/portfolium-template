# Portfolio Template

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS. This template is perfect for developers, designers, and professionals who want to showcase their work and skills.

## Features

- 🎨 Modern and responsive design
- 🌐 Multi-language support (English & Indonesian)
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📄 Easy to customize with JSON data files

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### 1. Personal Information

Edit the following files to update your personal information:

- `src/data/profile.json` - Main profile data
- `src/data/en.json` - English translations
- `src/data/id.json` - Indonesian translations
- `src/config/site.ts` - Site configuration

### 2. Images and Assets

Replace the following placeholder files with your own:

- `public/profile.jpg` - Your profile photo
- `public/YourName_CV.pdf` - Your CV/resume
- `public/logos/` - Company/university logos
- `public/thumbnails/` - Project thumbnails

### 3. Styling

The template uses Tailwind CSS for styling. You can customize the design by:

- Modifying `src/styles/globals.css` for global styles
- Updating `tailwind.config.js` for theme customization
- Editing component files in `src/components/` and `src/sections/`

### 4. Content Structure

The portfolio includes the following sections:

- **Hero**: Introduction and main pitch
- **About**: Personal description and skills
- **Work Experience**: Professional history
- **Education**: Academic background
- **Skills**: Technical tools and technologies
- **Projects**: Featured work and projects
- **Achievements**: Awards and recognition
- **Contact**: Social links and contact information

## Data Structure

### Profile Data (`src/data/profile.json`)

```json
{
  "name": "Your Name",
  "roles": ["Role 1", "Role 2", "Role 3"],
  "pitch": "Your professional pitch",
  "about": "About yourself",
  "cv": "/YourName_CV.pdf",
  "tools": ["Tool 1", "Tool 2", "Tool 3"],
  "workExperience": [...],
  "education": [...],
  "projects": [...],
  "achievements": [...],
  "contact": {...}
}
```

### Work Experience

```json
{
  "company": "Company Name",
  "position": "Job Title",
  "period": "Start – End",
  "description": "Job description",
  "logo": "/logos/company.png"
}
```

### Projects

```json
{
  "title": "Project Name",
  "desc": "Project description",
  "technologies": ["Tech 1", "Tech 2"],
  "website": "https://project-url.com",
  "doc": "https://docs-url.com",
  "github": "https://github.com/username/project",
  "thumbnail": "/thumbnails/project.jpg"
}
```

## Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name/"
}
```

2. Update the URL in `src/config/site.ts`:
```typescript
url: "https://yourusername.github.io/your-repo-name/"
```

3. Build and deploy:
```bash
npm run build
npm run deploy
```

### Other Platforms

You can deploy to any static hosting platform:

- **Netlify**: Connect your GitHub repository
- **Vercel**: Import your project
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload the `dist` folder

## Customization Tips

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Fonts**: Add custom fonts in `src/styles/globals.css`
3. **Animations**: Modify Framer Motion animations in components
4. **Layout**: Adjust spacing and layout in component files
5. **Content**: Update all text content in the JSON data files

## File Structure

```
portfolio-template/
├── public/
│   ├── logos/           # Company/university logos
│   ├── thumbnails/      # Project thumbnails
│   ├── profile.jpg      # Profile photo
│   └── YourName_CV.pdf  # CV/Resume
├── src/
│   ├── components/      # Reusable components
│   ├── config/          # Configuration files
│   ├── contexts/        # React contexts
│   ├── data/            # JSON data files
│   ├── hooks/           # Custom hooks
│   ├── sections/        # Page sections
│   └── styles/          # CSS styles
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help customizing the template, please:

1. Check the [Issues](https://github.com/yourusername/portfolio-template/issues) page
2. Create a new issue if your question hasn't been answered
3. Contact me directly if needed

## Acknowledgments

- Design inspired by modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Happy coding!** 🚀

If you use this template, please give it a ⭐ star on GitHub!