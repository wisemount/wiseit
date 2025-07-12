# Netlify Deployment Guide

## Quick Deploy (Drag & Drop)

### ✅ Step 1: Build Complete
Your `dist` folder is ready for deployment!

### 🚀 Step 2: Deploy to Netlify
1. **Go to**: https://app.netlify.com/drop
2. **Drag & Drop**: Your `dist` folder from: `m:\ProjectCode\WiseMount\wiseit\dist`
3. **Wait**: ~30 seconds for deployment
4. **Get URL**: Like `https://amazing-name-123.netlify.app`

## Git-Based Deployment (Auto-Deploy)

### Option A: Connect GitHub Repository
1. Go to: https://app.netlify.com
2. Click: "New site from Git"
3. Choose: GitHub (connect your account)
4. Select: `wisemount/wiseit` repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click: "Deploy site"

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

## Features You Get:
- ✅ **Custom domains** (free .netlify.app)
- ✅ **HTTPS** (automatic SSL)
- ✅ **Global CDN** (fast worldwide)
- ✅ **Auto-deploy** on Git push
- ✅ **Form handling** (if needed)
- ✅ **Analytics** (basic free tier)

## Your Site Will Be Live At:
- **Temporary URL**: `https://random-name-123.netlify.app`
- **Custom domain**: Add your own domain later

## Next Steps:
1. Deploy via drag & drop first
2. Optionally connect Git for auto-deploys
3. Configure custom domain if needed
