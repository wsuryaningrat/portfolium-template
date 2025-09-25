# Deployment Guide

## GitHub Pages Deployment

This template is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How it works:

1. **Automatic Deployment**: Every push to the `main` branch triggers a GitHub Action that:
   - Builds the project
   - Deploys to GitHub Pages
   - Updates the live site at `https://yourusername.github.io/portfolium-template/`

2. **Manual Deployment**: You can also deploy manually using:
   ```bash
   npm run build
   npm run deploy
   ```

### Setting up GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

### Template Preservation:

- The template functionality remains intact
- Users can still use `npm run template-setup` to customize
- The deployment only affects the live site, not the template source

### Custom Domain (Optional):

To use a custom domain:
1. Add a `CNAME` file in the `public/` directory
2. Set up DNS records pointing to your GitHub Pages URL
3. Configure the custom domain in GitHub Pages settings

## Local Development:

```bash
npm run dev
```

## Building Locally:

```bash
npm run build
npm run preview
```
