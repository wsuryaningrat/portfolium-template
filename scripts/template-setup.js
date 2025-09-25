#!/usr/bin/env node

/**
 * Portfolio Template Setup Script
 * Interactive setup for customizing the portfolio template
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function setupTemplate() {
  console.clear();
  log('🎨 Portfolio Template Setup', 'cyan');
  log('==========================\n', 'cyan');
  
  log('Welcome! This will take just 2 minutes to set up your portfolio.\n', 'blue');
  
  try {
    // Get basic information
    log('📝 Basic Information (just 4 quick questions)', 'yellow');
    const name = await askQuestion('Your name: ');
    const title = await askQuestion('Your job title (e.g., "Software Developer"): ');
    const email = await askQuestion('Your email: ');
    const github = await askQuestion('Your GitHub username: ');
    
    // Language selection
    log('\n🌐 Language Support', 'yellow');
    const languageChoice = await askQuestion('Choose language support:\n1. English only\n2. Indonesian only\n3. Both languages\nEnter choice (1-3): ');
    
    let useEnglish = false;
    let useIndonesian = false;
    
    switch(languageChoice.trim()) {
      case '1':
        useEnglish = true;
        useIndonesian = false;
        break;
      case '2':
        useEnglish = false;
        useIndonesian = true;
        break;
      case '3':
        useEnglish = true;
        useIndonesian = true;
        break;
      default:
        useEnglish = true;
        useIndonesian = true;
        break;
    }
    
    // Update profile.json
    log('\n📄 Updating profile data...', 'blue');
    const profilePath = path.join(projectRoot, 'src', 'data', 'profile.json');
    const profileData = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
    
    profileData.name = name;
    profileData.roles = [title];
    profileData.contact.email = email;
    profileData.contact.github = `https://github.com/${github}`;
    
    fs.writeFileSync(profilePath, JSON.stringify(profileData, null, 2));
    log('✅ Profile data updated', 'green');
    
    // Update site config
    const siteConfigPath = path.join(projectRoot, 'src', 'config', 'site.ts');
    let siteConfig = fs.readFileSync(siteConfigPath, 'utf8');
    
    siteConfig = siteConfig.replace(/name: "Your Name"/, `name: "${name}"`);
    siteConfig = siteConfig.replace(/title: "Your Title"/, `title: "${title}"`);
    siteConfig = siteConfig.replace(/email: "your\.email@example\.com"/, `email: "${email}"`);
    siteConfig = siteConfig.replace(/github: "https:\/\/github\.com\/yourusername"/, `github: "https://github.com/${github}"`);
    
    fs.writeFileSync(siteConfigPath, siteConfig);
    log('✅ Site configuration updated', 'green');
    
    // Handle language files
    const enPath = path.join(projectRoot, 'src', 'data', 'en.json');
    const idPath = path.join(projectRoot, 'src', 'data', 'id.json');
    
    if (useEnglish && !useIndonesian) {
      if (fs.existsSync(idPath)) {
        fs.unlinkSync(idPath);
        log('🗑️  Removed Indonesian language file', 'yellow');
      }
    } else if (useIndonesian && !useEnglish) {
      if (fs.existsSync(enPath)) {
        fs.unlinkSync(enPath);
        log('🗑️  Removed English language file', 'yellow');
      }
    }
    
    // Update package.json
    const packagePath = path.join(projectRoot, 'package.json');
    const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    packageData.name = `${github}-portfolio`;
    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));
    log('✅ Package.json updated', 'green');
    
    log('\n🎉 Setup complete!', 'green');
    log('\nNext steps (optional):', 'cyan');
    log('1. Replace images in public/ folder with your own', 'blue');
    log('2. Add your CV to public/cv/yourname_cv.pdf', 'blue');
    log('3. Run "npm run dev" to see your portfolio!', 'blue');
    log('4. Deploy to Vercel/Netlify when ready', 'blue');
    
  } catch (error) {
    log(`❌ Error: ${error.message}`, 'red');
  } finally {
    rl.close();
  }
}

// Run the setup
setupTemplate();