# Quick Start Guide for Team Scipio Website

## 📋 What You Have

A complete, professional author portfolio website with:

- ✅ Home page with book showcase
- ✅ About section
- ✅ DJ Scipio biography
- ✅ Books section
- ✅ Reviews section
- ✅ Fan gallery
- ✅ Video section
- ✅ Contact form
- ✅ Newsletter signup
- ✅ Mobile responsive design

## 🎯 Next Steps to Launch

### Step 1: Add Your Images

1. Collect these photos:

   - Book cover (Hip-Hop Time Capsule)
   - Your professional author photo
   - DJ Scipio photo
   - Video thumbnail
   - Fan photos (as many as you want!)

2. Place them in the correct folders:

   - Main images → `/images/` folder
   - Fan photos → `/images/gallery/` folder

3. Name them exactly as specified in `IMAGE_GUIDE.md`

### Step 2: Update the Content

1. Open `index.html` in a text editor (VS Code, TextEdit, Notepad)

2. Update these sections with your actual information:

   - **Hero description** - Your book description
   - **About Me** - Your biography
   - **DJ Scipio** - Your DJ story
   - **Book reviews** - Add real reviews
   - **Gallery captions** - Add event names and dates

3. Replace Amazon links with your actual book links

### Step 3: Test Locally

1. Double-click `index.html` to open in your web browser
2. Check that everything looks good
3. Test on your phone (just open the file on mobile browser)

### Step 4: Deploy to GitHub Pages

#### Option A: Using GitHub Desktop (Easiest)

1. Download GitHub Desktop: https://desktop.github.com/
2. Create a GitHub account if you don't have one
3. In GitHub Desktop: File → Add Local Repository → Select your folder
4. Click "Publish repository" → Make it public
5. Go to GitHub.com → Your repository → Settings → Pages
6. Enable Pages on the "main" branch
7. Your site will be live in a few minutes!

#### Option B: Using Command Line

```bash
# In Terminal/Command Prompt, navigate to your folder
cd /path/to/team_scipio

# Initialize git
git init
git add .
git commit -m "Initial website launch"

# Create repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/team-scipio.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 🎨 Customization Tips

### Change Colors

Edit `styles.css` and update these values:

- Background: `#000` (black)
- Text: `#fff` (white)
- Accent: `#ff6b6b` (red)

### Add More Books

Copy the book card HTML block in the Books section and update:

- Image path
- Book title
- Description
- Amazon link

### Add More Reviews

Copy a review card and update:

- Star rating
- Review text
- Reviewer name

### Update Social Links

Find the social links section at the bottom and add your:

- Facebook URL
- Instagram URL
- Any other social media

## 📱 Mobile Menu

The website automatically shows a hamburger menu on mobile devices. No setup needed!

## 🔧 Troubleshooting

**Images not showing?**

- Check that image files are in the correct folder
- Check that filenames match exactly (including .jpg extension)
- Check that filenames don't have spaces (use dashes instead)

**Changes not showing?**

- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Make sure you saved all files

**GitHub Pages not working?**

- Wait 5-10 minutes after enabling (it takes time)
- Check that repository is public
- Check that "main" branch is selected in Pages settings
- Make sure `index.html` is in the root folder

## 📧 Need Help?

If you run into issues:

1. Check the README.md file for detailed instructions
2. Check the IMAGE_GUIDE.md for image requirements
3. Review this QUICKSTART.md
4. Contact your developer

## 🚀 Your Website URL

Once deployed on GitHub Pages, your site will be at:

```
https://YOUR-USERNAME.github.io/team-scipio/
```

(Replace YOUR-USERNAME with your actual GitHub username)

## ✅ Launch Checklist

Before going live, make sure:

- [ ] All images are added and showing correctly
- [ ] All text content is updated (no placeholder text)
- [ ] Amazon links work and go to the right products
- [ ] Contact form has correct email (you may need to set up a form service)
- [ ] Social media links are correct
- [ ] Tested on desktop browser
- [ ] Tested on mobile browser
- [ ] All sections have real content
- [ ] No spelling/grammar errors

---

**Congratulations on your new website! 🎉**
