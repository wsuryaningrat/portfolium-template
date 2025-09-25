# GitHub Pages Setup

## Quick Setup
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as source
4. Create `.github/workflows/deploy.yml` with the content below

## Workflow File

Create `.github/workflows/deploy.yml`:

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

## Custom Domain (Optional)
1. Add `CNAME` file in `public/` directory
2. Set up DNS records pointing to your GitHub Pages URL
3. Configure custom domain in GitHub Pages settings
