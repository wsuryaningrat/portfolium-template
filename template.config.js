// Template Configuration
// This file contains template-specific settings and placeholders

export const templateConfig = {
  // Template Information
  name: "Portfolium Template",
  version: "1.0.0",
  description: "A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS",
  author: "Your Name",
  repository: "https://github.com/yourusername/portfolium-template",
  
  // Template Features
  features: [
    "Modern and responsive design",
    "Multi-language support (English & Indonesian)",
    "Mobile-first approach",
    "Fast loading with Vite",
    "Smooth animations with Framer Motion",
    "SEO optimized",
    "Easy to customize with JSON data files",
    "Dark/Light mode toggle",
    "Project thumbnails with GIF support",
    "Professional timeline components"
  ],
  
  // Tech Stack
  techStack: {
    frontend: "React 18, TypeScript",
    styling: "Tailwind CSS",
    animations: "Framer Motion",
    icons: "Lucide React",
    buildTool: "Vite",
    deployment: "GitHub Pages"
  },
  
  // File Structure
  structure: {
    data: "src/data/",
    components: "src/components/",
    sections: "src/sections/",
    styles: "src/styles/",
    public: "public/"
  },
  
  // Customization Points
  customization: {
    profile: "src/data/profile.json",
    content: ["src/data/en.json", "src/data/id.json"],
    config: "src/config/site.ts",
    styling: "src/styles/globals.css",
    images: "public/"
  },
  
  // Setup Instructions
  setup: {
    install: "npm install",
    dev: "npm run dev",
    build: "npm run build",
    customize: "Edit files in src/data/ and public/ folders"
  }
};

export default templateConfig;
