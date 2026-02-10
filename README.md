# Team Scipio Author Portfolio Website

A professional author portfolio website for showcasing books, reviews, and fan gallery.

## 🎯 Features

1. **Home/About Section** - Introduction and book information
2. **Books Section** - Display of published books with Amazon links
3. **Reviews Section** - Reader testimonials and book reviews
4. **Fan Gallery** - Photos with fans and accolades
5. **Contact Form** - Get in touch with the author
6. **Newsletter Signup** - Email list subscription

## 📁 Project Structure

```
team_scipio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image directory
│   ├── book-cover.jpg  # Book cover image
│   ├── author-photo.jpg # Author photo
│   ├── dj-scipio.jpg   # DJ Scipio photo
│   ├── breakfast-club-thumbnail.jpg # Video thumbnail
│   └── gallery/        # Gallery photos folder
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       └── ...
└── README.md           # This file
```

## 🖼️ Adding Images

### Required Images:

1. **book-cover.jpg** - The Hip-Hop Time Capsule book cover
2. **author-photo.jpg** - Professional author photo for the About section
3. **dj-scipio.jpg** - DJ Scipio photo
4. **breakfast-club-thumbnail.jpg** - Thumbnail for the video section

### Gallery Images:

Place all fan photos and accolade images in the `images/gallery/` folder with descriptive names like:

- `photo1.jpg`, `photo2.jpg`, etc.
- Or use descriptive names: `apollo-theater-2023.jpg`, `fan-meeting-nyc.jpg`, etc.

## 🎨 Customizing Content

### To Update Text Content:

1. Open `index.html`
2. Find the section you want to edit
3. Update the text between the HTML tags
4. Save the file

### To Add More Books:

In the "Books Section" of `index.html`, duplicate this code block:

```html
<div class="book-card">
  <div class="book-card-image">
    <img src="images/your-book-cover.jpg" alt="Book Title" />
  </div>
  <h3>Your Book Title</h3>
  <p>Book Description</p>
  <a href="https://www.amazon.com" target="_blank" class="btn-link"
    >Available on Amazon</a
  >
</div>
```

### To Add More Reviews:

In the "Reviews Section" of `index.html`, duplicate this code block:

```html
<div class="review-card">
  <div class="review-stars">★★★★★</div>
  <p class="review-text">"Your review text here"</p>
  <p class="review-author">- Reviewer Name</p>
</div>
```

### To Add More Gallery Photos:

In the "Gallery Section" of `index.html`, duplicate this code block:

```html
<div class="gallery-item">
  <img src="images/gallery/your-photo.jpg" alt="Description" />
  <div class="gallery-overlay">
    <p>Event Name - Date</p>
  </div>
</div>
```

## 🚀 Deploying to GitHub Pages

1. **Create a GitHub Repository:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Team Scipio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 📤 Usage: Updating the Website

After making changes to the website, follow these steps to publish updates:

### Quick Update (Most Common)

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Update: description of changes"

# Push to GitHub (automatically updates the live site)
git push
```

### Detailed Workflow

1. **Check current status** (see what files have changed):

   ```bash
   git status
   ```

2. **Stage specific files** (or use `git add .` for all):

   ```bash
   git add index.html styles.css images/gallery/new-photo.jpg
   ```

3. **Commit your changes**:

   ```bash
   git commit -m "Add new gallery photos and update styles"
   ```

4. **Push to GitHub Pages**:

   ```bash
   git push origin main
   ```

5. **Verify deployment**:
   - GitHub Pages typically updates within 1-2 minutes
   - Check the Actions tab on GitHub for deployment status
   - Visit your live site to confirm changes

### Using GitHub CLI (gh)

If you have the [GitHub CLI](https://cli.github.com/) installed:

```bash
# Check repository status
gh repo view --web

# View recent deployments
gh run list --workflow=pages-build-deployment

# Watch deployment progress
gh run watch

# Open the live site
gh browse
```

### Useful Git Commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `git status`           | See changed files                    |
| `git diff`             | View specific changes                |
| `git log --oneline -5` | View last 5 commits                  |
| `git pull`             | Get latest changes from GitHub       |
| `git stash`            | Temporarily save uncommitted changes |
| `git stash pop`        | Restore stashed changes              |

### Troubleshooting

- **Changes not appearing?** Wait 1-2 minutes, then hard refresh (`Cmd+Shift+R` on Mac)
- **Deployment failed?** Check the Actions tab on GitHub for error details
- **Merge conflicts?** Run `git pull` before making changes

## 🔧 Local Development

To view the website locally:

1. Open `index.html` in your web browser
2. Or use a local server:

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node.js (if you have it)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## 📱 Responsive Design

The website is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones

## 🎨 Color Scheme

- Background: Black (#000)
- Text: White (#fff)
- Accents: Red gradient for buttons
- Cards: Dark gray (#1a1a1a)

## ✨ Features

- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Image lazy loading
- Gallery lightbox (click to enlarge)
- Contact form validation
- Newsletter signup
- Social media links
- Sticky navigation bar

## 📝 Next Steps

1. **Add your images** to the `images/` folder
2. **Update the content** in `index.html` with actual book information, reviews, and bio
3. **Customize colors** in `styles.css` if needed
4. **Add real Amazon links** for the books
5. **Add video** to the Breakfast Club section (replace placeholder with YouTube embed)
6. **Test on mobile** devices to ensure everything looks good
7. **Deploy** to GitHub Pages

## 🆘 Support

For any questions or issues, please contact the developer.

---

**Last Updated:** October 31, 2025
