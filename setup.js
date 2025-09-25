#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Portfolio Template Setup');
console.log('============================\n');

const questions = [
  {
    key: 'name',
    question: 'What is your full name?',
    default: 'John Doe'
  },
  {
    key: 'title',
    question: 'What is your professional title?',
    default: 'Software Engineer, Full Stack Developer, and Tech Lead'
  },
  {
    key: 'description',
    question: 'Brief description of yourself:',
    default: 'Expert in web development, mobile applications, and cloud technologies.'
  },
  {
    key: 'github',
    question: 'GitHub username:',
    default: 'yourusername'
  },
  {
    key: 'linkedin',
    question: 'LinkedIn username:',
    default: 'yourusername'
  },
  {
    key: 'email',
    question: 'Email address:',
    default: 'your.email@example.com'
  },
  {
    key: 'website',
    question: 'Personal website/blog URL:',
    default: 'https://yourblog.dev'
  },
  {
    key: 'repoName',
    question: 'GitHub repository name:',
    default: 'portfolio-template'
  }
];

const answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    updateFiles();
    return;
  }

  const q = questions[index];
  rl.question(`${q.question} (${q.default}): `, (answer) => {
    answers[q.key] = answer.trim() || q.default;
    askQuestion(index + 1);
  });
}

function updateFiles() {
  console.log('\n📝 Updating files...\n');

  // Update package.json
  updatePackageJson();
  
  // Update site config
  updateSiteConfig();
  
  // Update profile data
  updateProfileData();
  
  // Update English translations
  updateEnglishData();
  
  // Update Indonesian translations
  updateIndonesianData();

  console.log('✅ Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Replace placeholder images in public/ folder');
  console.log('2. Update your CV file (public/YourName_CV.pdf)');
  console.log('3. Add your project thumbnails to public/thumbnails/');
  console.log('4. Add company logos to public/logos/');
  console.log('5. Run "npm run dev" to start development server');
  console.log('6. Customize the content in src/data/ files');
  
  rl.close();
}

function updatePackageJson() {
  const packagePath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  packageJson.name = answers.repoName;
  packageJson.homepage = `https://${answers.github}.github.io/${answers.repoName}/`;
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json');
}

function updateSiteConfig() {
  const sitePath = path.join(__dirname, 'src/config/site.ts');
  let siteConfig = fs.readFileSync(sitePath, 'utf8');
  
  siteConfig = siteConfig.replace(/name: ".*?"/, `name: "${answers.name}"`);
  siteConfig = siteConfig.replace(/title: ".*?"/, `title: "${answers.title}"`);
  siteConfig = siteConfig.replace(/description: ".*?"/, `description: "${answers.description}"`);
  siteConfig = siteConfig.replace(/url: ".*?"/, `url: "https://${answers.github}.github.io/${answers.repoName}/"`);
  siteConfig = siteConfig.replace(/blog: ".*?"/, `blog: "${answers.website}"`);
  siteConfig = siteConfig.replace(/github: ".*?"/, `github: "https://github.com/${answers.github}"`);
  siteConfig = siteConfig.replace(/linkedin: ".*?"/, `linkedin: "https://www.linkedin.com/in/${answers.linkedin}"`);
  siteConfig = siteConfig.replace(/email: ".*?"/, `email: "${answers.email}"`);
  
  fs.writeFileSync(sitePath, siteConfig);
  console.log('✅ Updated site configuration');
}

function updateProfileData() {
  const profilePath = path.join(__dirname, 'src/data/profile.json');
  const profileData = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
  
  profileData.name = answers.name;
  profileData.cv = `/${answers.name.replace(/\s+/g, '')}_CV.pdf`;
  profileData.contact.linkedin = `https://linkedin.com/in/${answers.linkedin}`;
  profileData.contact.github = `https://github.com/${answers.github}`;
  profileData.contact.blog = answers.website;
  profileData.contact.email = answers.email;
  
  fs.writeFileSync(profilePath, JSON.stringify(profileData, null, 2));
  console.log('✅ Updated profile data');
}

function updateEnglishData() {
  const enPath = path.join(__dirname, 'src/data/en.json');
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  
  enData.name = answers.name;
  enData.cv = `/${answers.name.replace(/\s+/g, '')}_CV.pdf`;
  enData.contact.linkedin = `https://linkedin.com/in/${answers.linkedin}`;
  enData.contact.github = `https://github.com/${answers.github}`;
  enData.contact.blog = answers.website;
  enData.contact.email = answers.email;
  
  fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
  console.log('✅ Updated English translations');
}

function updateIndonesianData() {
  const idPath = path.join(__dirname, 'src/data/id.json');
  const idData = JSON.parse(fs.readFileSync(idPath, 'utf8'));
  
  idData.name = answers.name;
  idData.cv = `/${answers.name.replace(/\s+/g, '')}_CV.pdf`;
  idData.contact.linkedin = `https://linkedin.com/in/${answers.linkedin}`;
  idData.contact.github = `https://github.com/${answers.github}`;
  idData.contact.blog = answers.website;
  idData.contact.email = answers.email;
  
  fs.writeFileSync(idPath, JSON.stringify(idData, null, 2));
  console.log('✅ Updated Indonesian translations');
}

// Start the setup process
askQuestion(0);
