# How to Add Your Logo to the Website

## Quick Steps:

### Option 1: Using Your WhatsApp Image File

1. **Find your logo file** at:
   ```
   /Users/saravanakumar/Documents/(77) WhatsApp.html
   ```

2. **If it's an HTML file**, you need to extract the actual image:
   - Open the file in a browser
   - Right-click on the image
   - Select "Save Image As..."
   - Save it as `logo.png` or `logo.jpg`

3. **Copy the image file** to your website folder:
   ```
   /Users/saravanakumar/Documents/ss-cursor-website/
   ```

4. **Rename the file** to `logo.png`

5. **Refresh your browser** - the logo should appear!

---

### Option 2: Using Any Image File

1. **Get your logo image** (PNG, JPG, or SVG format recommended)

2. **Copy it** to the website folder:
   ```
   /Users/saravanakumar/Documents/ss-cursor-website/
   ```

3. **Rename it** to `logo.png`

4. **Refresh the website** in your browser

---

### Option 3: If You Have a Different File Name

If your logo is named differently (e.g., `coolblue-logo.png`), you can either:

**A) Rename your file to `logo.png`**

OR

**B) Update the HTML file:**
- Open `index.html`
- Find this line: `<img src="logo.png" alt="Cool Blue Logo" class="logo-img">`
- Change `logo.png` to your actual filename (e.g., `coolblue-logo.png`)

---

## Supported Image Formats:

✅ PNG (best for logos with transparency)
✅ JPG/JPEG
✅ SVG (vector, scales perfectly)
✅ WebP

---

## Logo Specifications:

- **Recommended size**: 200x200 pixels or larger
- **Format**: PNG with transparent background (best)
- **The website will automatically resize it** to 50x50 pixels

---

## Troubleshooting:

**Logo not showing?**
1. Check the file is named exactly `logo.png` (case-sensitive on Mac)
2. Make sure it's in the same folder as `index.html`
3. Try hard-refreshing your browser (Cmd + Shift + R on Mac)
4. Check browser console (F12) for any errors

**Logo looks blurry?**
- Use a higher resolution image (at least 200x200px)
- Try using PNG or SVG format

**Logo has wrong colors?**
- Make sure you're using a PNG with transparency
- Or use an SVG file for best results

---

## Current Logo Animation:

The logo has a cool 3D flip animation! It rotates 180° every 3 seconds.

To disable this animation, remove the `animation` line from `.logo-img` in `styles.css`.
