# 🚀 Deployment Guide for Vercel

This guide walks you through deploying your Pomodoro Timer to Vercel.

## Prerequisites

- A [GitHub](https://github.com), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org) account
- A [Vercel](https://vercel.com) account (free tier is sufficient)
- Git installed on your computer

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to Git Repository

1. Create a new repository on GitHub/GitLab/Bitbucket
2. Push your code:

```bash
# If you haven't already initialized git
git init
git add .
git commit -m "Initial commit: Pomodoro Timer"

# Add your remote repository
git remote add origin YOUR_REPOSITORY_URL
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository:
   - Click **"Import"** next to your repository
   - If you don't see it, click **"Import Git Repository"** and paste the URL

### Step 3: Configure Project

Vercel will automatically detect Next.js. Verify these settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. Your app will be live at: `https://your-project-name.vercel.app`

### Step 5: Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain and follow the DNS configuration instructions

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

From your project directory:

```bash
# For preview deployment
vercel

# For production deployment
vercel --prod
```

The CLI will:
1. Ask for project configuration (use defaults for Next.js)
2. Upload your code
3. Build your application
4. Provide you with a deployment URL

## Continuous Deployment

Once deployed via Method 1, Vercel automatically:
- Deploys every push to your `main` branch to production
- Creates preview deployments for pull requests
- Provides unique URLs for each deployment

## Environment Variables (If Needed)

If you add environment variables later:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables for Production, Preview, and Development
4. Redeploy to apply changes

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel Dashboard
2. Ensure `npm run build` works locally
3. Verify all dependencies are in `package.json`

### App Not Loading

1. Check browser console for errors
2. Verify the deployment completed successfully
3. Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Notifications Not Working

Browser notifications require HTTPS, which Vercel provides automatically. Ensure users click "Allow" when prompted.

## Performance Optimization

Your app is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Image optimization (if you add images)
- ✅ Compression and caching
- ✅ CDN distribution worldwide

## Updating Your Deployment

Simply push changes to your Git repository:

```bash
git add .
git commit -m "Update: your changes"
git push
```

Vercel will automatically rebuild and deploy.

## Vercel Dashboard Features

- **Analytics**: View visitor data (available on Pro plan)
- **Logs**: Real-time function and build logs
- **Speed Insights**: Performance monitoring (available on Pro plan)
- **Deployments**: History of all deployments with rollback capability

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

**Your app is now live and accessible worldwide! 🎉**

Share your deployment URL with fellow accountancy students! 🐻🐼
