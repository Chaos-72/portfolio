# Deployment Guide: Vercel + Railway

This guide provides step-by-step instructions to deploy your portfolio website to Vercel (frontend) and Railway (backend) for free.

## 📋 Prerequisites

Before starting, make sure you have:
- A GitHub account (for pushing your code)
- Your `GOOGLE_API_KEY` (Gemini API key) ready
- Git installed on your machine

## 🚀 Part 1: Push Code to GitHub

If you haven't already pushed your code to GitHub:

1. **Initialize Git** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

## 🔧 Part 2: Deploy Backend to Railway

### Step 1: Create Railway Account

1. Go to [Railway.app](https://railway.app/)
2. Click **"Start a New Project"**
3. Sign up with GitHub (it's free)

### Step 2: Deploy from GitHub

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your portfolio repository (`tensor-sagan`)
4. Railway will auto-detect it as a Python project

### Step 3: Configure Backend Directory

1. In Railway dashboard, go to **Settings**
2. Under **"Root Directory"**, set it to: `backend`
3. Under **"Start Command"**, verify it shows: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - This should be auto-detected from your `Procfile`

### Step 4: Set Environment Variables

1. Go to the **"Variables"** tab in Railway
2. Click **"+ New Variable"**
3. Add the following:
   - **Name**: `GOOGLE_API_KEY`
   - **Value**: Your actual Gemini API key
4. Click **"Add"**

### Step 5: Deploy and Get URL

1. Railway will automatically deploy your backend
2. Wait for deployment to complete (check the **"Deployments"** tab)
3. Once deployed, go to **"Settings"** → **"Networking"**
4. Click **"Generate Domain"** to get a public URL
5. **Copy this URL** - you'll need it for the frontend (e.g., `https://your-app.railway.app`)

> [!IMPORTANT]
> **Save your Railway backend URL!** You'll need it in the next step.

---

## 🎨 Part 3: Deploy Frontend to Vercel

### Step 1: Create Vercel Account

1. Go to [Vercel.com](https://vercel.com/)
2. Click **"Sign Up"**
3. Sign up with GitHub (it's free)

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Select your repository (`tensor-sagan`)
3. Vercel will auto-detect it as a Vite project

### Step 3: Configure Build Settings

1. **Framework Preset**: Should show "Vite" (auto-detected)
2. **Root Directory**: Click **"Edit"** and set to `frontend`
3. **Build Command**: `npm run build` (should be auto-filled)
4. **Output Directory**: `dist` (should be auto-filled)

### Step 4: Set Environment Variables

1. Before clicking "Deploy", expand **"Environment Variables"**
2. Add the following:
   - **Name**: `VITE_API_URL`
   - **Value**: Your Railway backend URL (e.g., `https://your-app.railway.app`)
   - Make sure there's **NO trailing slash** in the URL
3. Click **"Add"**

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for deployment to complete (usually takes 1-2 minutes)
3. Once deployed, you'll get a URL like `https://your-project.vercel.app`

---

## 🔄 Part 4: Update Backend CORS

Now that you have your Vercel URL, update the backend to allow requests from it:

### Step 1: Add Frontend URL to Railway

1. Go back to your **Railway project**
2. Go to **"Variables"** tab
3. Click **"+ New Variable"**
4. Add:
   - **Name**: `FRONTEND_URL`
   - **Value**: Your Vercel URL (e.g., `https://your-project.vercel.app`)
5. Click **"Add"**
6. Railway will automatically redeploy with the new variable

---

## ✅ Part 5: Verify Deployment

### Test Your Live Site

1. **Open your Vercel URL** in a browser
2. **Test the chat widget**:
   - Click the chat icon in the bottom right
   - Send a message about your portfolio
   - You should get an AI response
3. **Test the contact form**:
   - Scroll to the contact section
   - Fill out the form and submit
   - You should see a success message

### Troubleshooting

#### Chat/Contact Form Not Working

**Issue**: "Error connecting to server" or CORS errors

**Solutions**:
1. Check Railway logs for errors:
   - Go to Railway dashboard → **"Deployments"** → Click latest deployment → **"View Logs"**
2. Verify environment variables are set correctly:
   - Railway: `GOOGLE_API_KEY` and `FRONTEND_URL`
   - Vercel: `VITE_API_URL`
3. Make sure URLs don't have trailing slashes
4. Redeploy both services after fixing

#### Backend Not Starting

**Issue**: Railway deployment fails

**Solutions**:
1. Check that `backend` is set as the Root Directory in Railway settings
2. Verify all dependencies in `requirements.txt` are correct
3. Check Railway logs for specific error messages
4. Ensure `GOOGLE_API_KEY` is set in Railway variables

#### Frontend Build Fails

**Issue**: Vercel deployment fails

**Solutions**:
1. Make sure `frontend` is set as the Root Directory in Vercel settings
2. Verify `package.json` has all dependencies listed
3. Check Vercel build logs for specific errors

---

## 🎉 Success!

Your portfolio is now live! Here's what you've accomplished:

✅ **Backend**: Deployed to Railway with auto-scaling
✅ **Frontend**: Deployed to Vercel with CDN
✅ **Free Hosting**: Both services on generous free tiers
✅ **Auto-Deploy**: Push to GitHub = automatic deployment

### Next Steps

1. **Custom Domain** (optional):
   - Add your own domain in Vercel settings
   - Update `FRONTEND_URL` in Railway to match

2. **Monitor Usage**:
   - Railway: 500 hours/month free tier
   - Vercel: Unlimited bandwidth on hobby plan

3. **Update Content**:
   - Just push to GitHub - both services auto-deploy!

---

## 📚 Useful Links

- **Railway Dashboard**: https://railway.app/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Docs**: https://docs.railway.app/
- **Vercel Docs**: https://vercel.com/docs

---

## 💡 Tips

- **Environment Variables**: If you change them, both platforms require a redeploy
- **Logs**: Always check deployment logs if something isn't working
- **Free Tiers**: Monitor your usage to stay within free limits
- **Custom Domains**: Both Vercel and Railway support custom domains for free

Happy deploying! 🚀
