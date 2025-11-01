# Image Placement Guide

## Where to Add Your Images

Replace these placeholder image paths with your actual images:

### Main Images (place in `/images/` folder):

1. **book-cover.jpg**

   - The Hip-Hop Time Capsule book cover
   - Recommended size: 800x1200px (portrait)
   - Format: JPG or PNG

2. **author-photo.jpg**

   - Professional photo for the "About Me" section
   - Recommended size: 600x800px (portrait)
   - Format: JPG or PNG

3. **dj-scipio.jpg**

   - Photo for the DJ Scipio biography section
   - Recommended size: 600x800px (portrait)
   - Format: JPG or PNG

4. **breakfast-club-thumbnail.jpg**
   - Thumbnail for the video section
   - Recommended size: 1280x720px (landscape, 16:9 ratio)
   - Format: JPG or PNG

### Gallery Images (place in `/images/gallery/` folder):

Add as many photos as you want! Suggested naming:

- photo1.jpg, photo2.jpg, photo3.jpg, etc.
- Or use descriptive names: apollo-theater-2023.jpg, fan-meeting-nyc.jpg

Recommended specs:

- Size: 1200x900px or similar (4:3 ratio works best)
- Format: JPG (smaller file sizes)
- Quality: 80-90% (good balance between quality and file size)

## Tips for Best Results

1. **Optimize images before uploading** - Use tools like TinyPNG or ImageOptim to reduce file sizes
2. **Use consistent aspect ratios** - Makes the site look more professional
3. **High quality** - But not too large (aim for under 500KB per image for web)
4. **Professional photos** - Use good lighting and clear, crisp images

## Current Image References in HTML

Search for these in `index.html` to update:

- `src="images/book-cover.jpg"`
- `src="images/author-photo.jpg"`
- `src="images/dj-scipio.jpg"`
- `src="images/breakfast-club-thumbnail.jpg"`
- `src="images/gallery/photo1.jpg"` (through photo6.jpg)

## Adding More Gallery Photos

To add more photos beyond photo6.jpg:

1. Copy this code block in the gallery section:

```html
<div class="gallery-item">
  <img src="images/gallery/your-photo-name.jpg" alt="Description" />
  <div class="gallery-overlay">
    <p>Event Name - Date</p>
  </div>
</div>
```

2. Replace `your-photo-name.jpg` with your actual filename
3. Update the description text
