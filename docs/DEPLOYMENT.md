# Deployment Guide

This template supports multiple deployment platforms. Choose the one that best fits your needs.

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended for Templates)

**Best for**: Open source projects, templates, free hosting

#### Automatic Deployment (Already Configured):
1. **Push to GitHub**: Every push to `main` branch auto-deploys
2. **Access Site**: `https://yourusername.github.io/portfolium-template/`
3. **No Setup Required**: GitHub Actions workflow is already configured

#### Manual Setup:
1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` branch to trigger deployment

#### Custom Domain:
```bash
# Add CNAME file
echo "yourdomain.com" > public/CNAME
git add public/CNAME && git commit -m "Add custom domain"
git push origin main
```

---

### 2. Vercel (Recommended for Performance)

**Best for**: Fast deployment, automatic HTTPS, great performance

#### Quick Deploy:
1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Build**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Your site will be live in minutes!

#### Custom Domain:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

#### Environment Variables (if needed):
```bash
# In Vercel dashboard
NODE_ENV=production
```

---

### 3. Netlify (Great for Static Sites)

**Best for**: Easy setup, form handling, serverless functions

#### Quick Deploy:
1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 18 (or latest)

3. **Deploy**:
   - Click "Deploy site"
   - Get your live URL instantly!

#### Custom Domain:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

#### Form Handling (if you add contact forms):
```html
<!-- Add to your contact form -->
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

---

## 🔧 Platform Comparison

| Feature | GitHub Pages | Vercel | Netlify |
|---------|-------------|--------|---------|
| **Cost** | Free | Free tier | Free tier |
| **Speed** | Good | Excellent | Good |
| **Custom Domain** | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ | ✅ | ✅ |
| **Build Time** | ~2-3 min | ~1-2 min | ~2-3 min |
| **Bandwidth** | 100GB/month | 100GB/month | 100GB/month |
| **Best For** | Templates, OSS | Performance | Static sites |

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] **Update Profile Data**: Edit `src/data/profile.json`
- [ ] **Add Your CV**: Replace `public/cv/johndoe_cv.pdf`
- [ ] **Update Images**: Replace `public/profile.jpg` and logos
- [ ] **Configure URLs**: Update `src/config/site.ts`
- [ ] **Test Locally**: Run `npm run build && npm run preview`
- [ ] **Check Mobile**: Test responsive design
- [ ] **Verify Links**: Test all external links

---

## 🚨 Common Issues & Solutions

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading:
- Check file paths in `public/` directory
- Ensure images are in correct folders
- Use relative paths starting with `/`

### CV Download Issues:
- Verify CV file exists in `public/cv/`
- Check CV path in language files (`en.json`, `id.json`)
- Test CV URL directly: `yoursite.com/cv/yourfile.pdf`

### Custom Domain Not Working:
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify domain is added in platform settings

---

## 🔄 Continuous Deployment

All platforms support automatic deployment:

- **GitHub Pages**: Push to `main` branch
- **Vercel**: Push to any branch (configurable)
- **Netlify**: Push to `main` branch (configurable)

---

## 📞 Support

If you encounter issues:

1. Check the platform's documentation
2. Review build logs in your platform's dashboard
3. Test locally with `npm run build`
4. Check file paths and configurations

---

## 🎯 Template Preservation

**Important**: The template functionality remains intact regardless of deployment platform:

- ✅ Users can still use "Use this template" button
- ✅ `npm run template-setup` works normally
- ✅ All customization features preserved
- ✅ Deployment only affects the live site, not the template source
