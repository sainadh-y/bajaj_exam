# Vercel Deployment Instructions

## Prerequisites
- Node.js installed on your system
- Vercel account (free account is sufficient)
- Git installed (for version control)

## Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

## Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate with your Vercel account.

## Step 3: Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: BFHL REST API"
```

## Step 4: Deploy to Vercel
```bash
vercel
```

## Step 5: Follow the Deployment Prompts

You'll be asked several questions:

1. **Set up and deploy** - Press Enter to confirm
2. **Which scope do you want to deploy to?** - Select your account
3. **Link to existing project?** - No (this is a new project)
4. **What's your project's name?** - You can use "bfhl-api" or press Enter for default
5. **In which directory is your code located?** - Press Enter for current directory (.)
6. **Want to override the settings?** - No

## Step 6: Test Your Deployed API

Once deployment completes, Vercel will provide you with a URL like:
```
https://bfhl-api.vercel.app
```

Your API endpoint will be:
```
https://bfhl-api.vercel.app/bfhl
```

## Step 7: Test with Postman

1. Open Postman
2. Create a new POST request
3. URL: `https://bfhl-api.vercel.app/bfhl`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Step 8: Submit to the Form

Submit your deployed API endpoint to:
```
https://forms.office.com/r/ZeVpUYp3zV
```

## Vercel Configuration (Optional)

If you want to customize the deployment, create a `vercel.json` file:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}
```

## Troubleshooting

### If you get deployment errors:
1. Make sure all dependencies are in package.json
2. Check that `index.js` exports the Express app
3. Verify the start script is correct in package.json

### Environment Variables:
If you need environment variables, use:
```bash
vercel env add
```

## Updating Your Deployment

To update your deployed API after making changes:
```bash
git add .
git commit -m "Update description"
vercel --prod
```

## Vercel Dashboard

You can also deploy through the Vercel web dashboard:
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Deploy automatically

The API is already configured for Vercel deployment with the proper package.json settings and Express app export.
