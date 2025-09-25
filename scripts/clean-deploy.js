#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Cleaning deployment cache and history...\n');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function cleanLocalCache() {
  log('📁 Cleaning local cache...', 'blue');
  
  const dirsToRemove = [
    'node_modules',
    'dist',
    '.vite',
    '.cache',
    '.next',
    '.nuxt'
  ];
  
  const filesToRemove = [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml'
  ];
  
  dirsToRemove.forEach(dir => {
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
        log(`  ✅ Removed ${dir}`, 'green');
      } catch (error) {
        log(`  ❌ Failed to remove ${dir}: ${error.message}`, 'red');
      }
    }
  });
  
  filesToRemove.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        fs.unlinkSync(file);
        log(`  ✅ Removed ${file}`, 'green');
      } catch (error) {
        log(`  ❌ Failed to remove ${file}: ${error.message}`, 'red');
      }
    }
  });
}

function cleanGitCache() {
  log('\n🔧 Cleaning Git cache...', 'blue');
  
  try {
    // Clean git cache
    execSync('git clean -fd', { stdio: 'inherit' });
    log('  ✅ Git cache cleaned', 'green');
    
    // Reset git index
    execSync('git reset --hard HEAD', { stdio: 'inherit' });
    log('  ✅ Git index reset', 'green');
    
  } catch (error) {
    log(`  ❌ Git cleanup failed: ${error.message}`, 'red');
  }
}

function reinstallDependencies() {
  log('\n📦 Reinstalling dependencies...', 'blue');
  
  try {
    execSync('npm install', { stdio: 'inherit' });
    log('  ✅ Dependencies reinstalled', 'green');
  } catch (error) {
    log(`  ❌ Failed to reinstall dependencies: ${error.message}`, 'red');
  }
}

function testBuild() {
  log('\n🔨 Testing build...', 'blue');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    log('  ✅ Build successful!', 'green');
  } catch (error) {
    log(`  ❌ Build failed: ${error.message}`, 'red');
    log('  💡 Check the error above and fix before deploying', 'yellow');
    return false;
  }
  
  return true;
}

function showDeploymentOptions() {
  log('\n🚀 Ready to deploy! Choose your platform:', 'cyan');
  log('\n1. GitHub Pages (Already configured):', 'yellow');
  log('   git push origin main', 'blue');
  
  log('\n2. Vercel:', 'yellow');
  log('   npx vercel --prod', 'blue');
  
  log('\n3. Netlify:', 'yellow');
  log('   npx netlify deploy --prod', 'blue');
  
  log('\n4. Manual upload:', 'yellow');
  log('   Upload the "dist" folder to your hosting provider', 'blue');
}

// Main execution
async function main() {
  log('🧹 Portfolium Template - Deployment Cleaner', 'cyan');
  log('==========================================\n', 'cyan');
  
  cleanLocalCache();
  cleanGitCache();
  reinstallDependencies();
  
  const buildSuccess = testBuild();
  
  if (buildSuccess) {
    showDeploymentOptions();
    log('\n✨ Cleanup complete! Your project is ready for deployment.', 'green');
  } else {
    log('\n❌ Cleanup complete, but build failed. Please fix errors before deploying.', 'red');
  }
}

// Run the script
main().catch(console.error);
