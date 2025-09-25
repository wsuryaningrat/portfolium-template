#!/usr/bin/env node

/**
 * Portfolium Template Setup Script
 * This script helps users customize the template quickly
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
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask questions
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Helper function to log with colors
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Main setup function
async function setupTemplate() {
  log('\n🎨 Portfolium Template Setup', 'cyan');
  log('============================', 'cyan');
  log('\nLet\'s customize your portfolio template!\n', 'yellow');

  try {
    // Get user information
    const name = await askQuestion('What\'s your name? ');
    const title = await askQuestion('What\'s your professional title? ');
    const email = await askQuestion('What\'s your email? ');
    const github = await askQuestion('What\'s your GitHub username? ');
    const linkedin = await askQuestion('What\'s your LinkedIn username? ');
    const website = await askQuestion('What\'s your website URL? ');
    
    // Language selection
    log('\n🌐 Language Configuration', 'cyan');
    const languageChoice = await askQuestion('Choose language support:\n1. English only\n2. Indonesian only\n3. Both languages\nEnter choice (1-3): ');
    
    let useEnglish = false;
    let useIndonesian = false;
    
    switch(languageChoice.trim()) {
      case '1':
        useEnglish = true;
        useIndonesian = false;
        log('✅ English only selected', 'green');
        break;
      case '2':
        useEnglish = false;
        useIndonesian = true;
        log('✅ Indonesian only selected', 'green');
        break;
      case '3':
        useEnglish = true;
        useIndonesian = true;
        log('✅ Both languages selected', 'green');
        break;
      default:
        useEnglish = true;
        useIndonesian = true;
        log('⚠️  Invalid choice, defaulting to both languages', 'yellow');
        break;
    }

    log('\n📝 Updating configuration files...', 'blue');

    // Update profile.json
    const profilePath = path.join(projectRoot, 'src', 'data', 'profile.json');
    const profileData = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
    
    profileData.name = name;
    profileData.pitch = `${name} is a ${title} with expertise in modern web technologies and user experience design.`;
    
    fs.writeFileSync(profilePath, JSON.stringify(profileData, null, 2));

    // Update site.ts
    const sitePath = path.join(projectRoot, 'src', 'config', 'site.ts');
    let siteContent = fs.readFileSync(sitePath, 'utf8');
    
    siteContent = siteContent.replace(/name: ".*"/, `name: "${name}"`);
    siteContent = siteContent.replace(/title: ".*"/, `title: "${title}"`);
    siteContent = siteContent.replace(/description: ".*"/, `description: "Expert in web development, mobile applications, and cloud technologies."`);
    siteContent = siteContent.replace(/url: ".*"/, `url: "${website}"`);
    siteContent = siteContent.replace(/github: ".*"/, `github: "https://github.com/${github}"`);
    siteContent = siteContent.replace(/linkedin: ".*"/, `linkedin: "https://www.linkedin.com/in/${linkedin}"`);
    siteContent = siteContent.replace(/email: ".*"/, `email: "${email}"`);
    
    fs.writeFileSync(sitePath, siteContent);

    // Handle language files based on user choice
    const enPath = path.join(projectRoot, 'src', 'data', 'en.json');
    const idPath = path.join(projectRoot, 'src', 'data', 'id.json');
    
    if (useEnglish && !useIndonesian) {
      // English only - remove Indonesian file
      if (fs.existsSync(idPath)) {
        fs.unlinkSync(idPath);
        log('🗑️  Removed Indonesian language file', 'yellow');
      }
      log('✅ English language file kept', 'green');
      log('ℹ️  Language switcher will show but only English content available', 'blue');
    } else if (useIndonesian && !useEnglish) {
      // Indonesian only - remove English file
      if (fs.existsSync(enPath)) {
        fs.unlinkSync(enPath);
        log('🗑️  Removed English language file', 'yellow');
      }
      log('✅ Indonesian language file kept', 'green');
      log('ℹ️  Language switcher will show but only Indonesian content available', 'blue');
    } else {
      // Both languages - keep both files
      log('✅ Both language files kept', 'green');
      log('ℹ️  Language switcher will work between English and Indonesian', 'blue');
    }

    // Update package.json
    const packagePath = path.join(projectRoot, 'package.json');
    const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    packageData.name = `${name.toLowerCase().replace(/\s+/g, '-')}-portfolio`;
    packageData.homepage = `${website}`;
    
    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));

    log('\n✅ Template setup complete!', 'green');
    log('\n📋 Next steps:', 'yellow');
    log('1. Replace images in public/ folder with your own', 'reset');
    log('2. Update content in src/data/en.json and src/data/id.json', 'reset');
    log('3. Run "npm run dev" to start development server', 'reset');
    log('4. Run "npm run build" when ready to deploy', 'reset');
    
    log('\n🎉 Happy coding!', 'magenta');

  } catch (error) {
    log(`\n❌ Error during setup: ${error.message}`, 'red');
  } finally {
    rl.close();
  }
}

// Run setup
setupTemplate();
