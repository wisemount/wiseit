# Quick Free Hosting Options

## 1. Netlify (Drag & Drop)
1. Build your project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder to the page
4. Get instant URL like: https://amazing-name-123.netlify.app

## 2. Vercel
1. Go to https://vercel.com
2. Import Git Repository
3. Auto-deploys on every push
4. Custom domains available

## 3. Surge.sh (Command Line)
```bash
npm install -g surge
npm run build
cd dist
surge
```

## 4. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 5. GitHub Pages (New Repo)
1. Create new repository on GitHub
2. Push code to new repo
3. Enable GitHub Pages in Settings
4. Choose source: Deploy from a branch (gh-pages)
