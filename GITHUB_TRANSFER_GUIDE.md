# Transfer Working Code to New GitHub Repository

## Option 1: Fix Current Repository (wisemount/wiseit)

The issue was with absolute vs relative asset paths. The fix has been applied:

### Changes Made:
1. **Vite Config**: Changed `base: '/'` to `base: './'` for relative paths
2. **Build**: Using `--base='./'` for GitHub Pages compatibility
3. **Deploy**: Fresh deployment with relative paths

### Verification:
- Check https://it.wisemount.in/ in 2-3 minutes for the updated deployment
- Assets should now load correctly with relative paths

## Option 2: Create New Repository

If you want to create a fresh repository:

### Step 1: Create New Repository
```bash
# On GitHub, create new repository: wisemount/wisemount-website
# Clone the new repository
git clone https://github.com/wisemount/wisemount-website.git
cd wisemount-website
```

### Step 2: Copy Working Files
Copy these essential files from current working directory:

#### Core Files:
- `src/` (entire folder)
- `public/` (entire folder)
- `package.json`
- `package-lock.json`
- `vite.config.js` (with base: './')
- `tsconfig.json`
- `tsconfig.node.json`
- `eslint.config.js`
- `index.html`

#### Deployment Files:
- `.github/workflows/deploy.yml`
- `netlify.toml`
- `public/_redirects`
- `public/.nojekyll`
- `public/CNAME` (update with your domain)

### Step 3: Setup New Repository
```bash
# Install dependencies
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Step 4: Configure GitHub Pages
1. Go to repository Settings > Pages
2. Set source to "Deploy from a branch"
3. Select "gh-pages" branch
4. Add custom domain: `it.wisemount.in`

## Option 3: Alternative Hosting Solutions

### Netlify (Already Working)
- Site: https://beamish-crostata-dc297e.netlify.app/
- Configuration: Use `netlify.toml` from this project
- Connect to Git repository for auto-deployment

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### AWS S3 + CloudFront
- Use the `S3_DEPLOYMENT.md` guide in this project
- Cheaper for high traffic sites

## Recommended Solution

**Use Option 1 first** - the current repository should now work with the relative path fix. If you still see issues:

1. Wait 5-10 minutes for GitHub Pages cache to clear
2. Clear your browser cache
3. Check https://it.wisemount.in/ again

If still not working, use **Option 2** to create a fresh repository with the exact working configuration.

## Key Files for Working Deployment

```
📦 Working Configuration
├── vite.config.js (base: './')
├── public/
│   ├── CNAME (it.wisemount.in)
│   ├── .nojekyll
│   ├── _redirects
│   └── 404.html
├── src/ (React app)
├── package.json (with gh-pages deploy script)
└── .github/workflows/deploy.yml
```

## Troubleshooting

### If GitHub Pages shows 404:
1. Check repository settings > Pages
2. Ensure gh-pages branch exists
3. Verify CNAME file contains correct domain

### If assets don't load:
1. Verify base path in vite.config.js is `'./'`
2. Check built files in dist/ have relative paths `./assets/...`
3. Rebuild and redeploy

### If routing doesn't work:
1. Ensure 404.html redirects to index.html
2. Add _redirects file for SPA routing
3. Include .nojekyll file to prevent Jekyll processing
