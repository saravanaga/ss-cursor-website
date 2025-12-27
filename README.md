# 🏏 Cricket Team Photo Gallery Website

A modern, interactive website for cricket team members to upload and share photos from matches, practice sessions, and team celebrations.

## ✨ Features

### 📸 Photo Upload
- **Drag & Drop Interface**: Easy file upload with drag-and-drop functionality
- **Multiple Photos**: Upload multiple photos at once
- **Photo Preview**: Preview photos before uploading
- **Member Attribution**: Add your name to photos you upload
- **Captions & Dates**: Add captions and match dates to your photos

### 🖼️ Photo Gallery
- **Responsive Grid Layout**: Beautiful masonry-style photo gallery
- **Filter Options**: Filter photos by category (All, Matches, Practice, Celebrations)
- **Hover Effects**: Smooth animations and hover effects
- **Full-Screen View**: Click on any photo to view it in full screen
- **Photo Details**: View uploader name, caption, and date

### 👥 Team Members Section
- **Team Directory**: Display all team members
- **Member Stats**: Show number of photos uploaded by each member
- **Role Display**: Show each member's role (Captain, Batsman, Bowler, etc.)

### 📱 Responsive Design
- **Mobile Friendly**: Works perfectly on phones, tablets, and desktops
- **Smooth Animations**: Professional transitions and hover effects
- **Modern UI**: Clean, colorful interface with cricket theme

## 🚀 How to Use

### For Team Members:

1. **Open the Website**: Simply open `index.html` in your browser
2. **Upload Photos**:
   - Click on "Upload Photos" in the navigation or hero section
   - Enter your name
   - Drag & drop photos or click "Choose Photos"
   - Add a caption (optional)
   - Add the match/event date (optional)
   - Click "Upload Photos"
3. **View Gallery**: Browse all team photos in the gallery section
4. **Filter Photos**: Use filter buttons to view specific categories

### Installation (No Server Required!)

This is a **standalone website** that works without any installation:

1. **Download all files** to a folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

2. **Open `index.html`** in any modern web browser:
   - Double-click the file
   - Or right-click → Open With → Your Browser
   - Or drag and drop into browser window

3. **That's it!** No server, no npm, no installation needed.

## 📁 File Structure

```
cricket-team-website/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Photo upload and gallery functionality
└── README.md       # This file
```

## 🎨 Customization

### Change Team Name
Edit `index.html` line 13:
```html
<h1>🏏 Your Team Name Here</h1>
```

### Change Colors
Edit `styles.css` at the top (lines 1-10):
```css
:root {
    --primary-color: #1e88e5;  /* Main blue color */
    --secondary-color: #43a047; /* Green color */
    /* Add your team colors here */
}
```

### Add Real Team Members
Edit `script.js` in the `loadSampleData()` function (around line 45):
```javascript
teamMembers = [
    { name: 'Your Name', role: 'Captain', photosUploaded: 0, avatar: '👨' },
    // Add more team members
];
```

## 🔧 Features Breakdown

### Photo Upload System
- Client-side photo preview (no server needed)
- Drag-and-drop file upload
- Multiple file selection
- Photo validation (images only)
- Instant preview before upload

### Gallery Features
- Dynamic photo grid
- Category filtering (All, Matches, Practice, Celebrations)
- Full-screen photo modal
- Photo information display
- Smooth animations

### Team Management
- Team member directory
- Upload statistics per member
- Role assignments
- Avatar display

## 💡 How It Works

This website uses **localStorage** in your browser to save photos temporarily. Here's what that means:

- ✅ Photos are stored locally in your browser
- ✅ No server or database needed
- ✅ Works completely offline
- ⚠️ Photos are stored per browser/device
- ⚠️ Clearing browser data will remove photos
- ⚠️ Not suitable for permanent storage

### For Permanent Storage (Optional)

To make photos permanent and shareable across devices, you would need:
1. A backend server (Node.js, Python, PHP, etc.)
2. A database (MongoDB, MySQL, Firebase, etc.)
3. Cloud storage for photos (AWS S3, Cloudinary, etc.)

## 🌟 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ Internet Explorer (not supported)

## 📝 Notes

- **Demo Data**: The website comes with sample photos (placeholder images) to demonstrate functionality
- **Real Photos**: When you upload photos, they replace the demo content
- **Local Storage**: Photos are saved in your browser's localStorage
- **Privacy**: All data stays on your device - nothing is sent to external servers

## 🎯 Future Enhancements

Potential features to add:
- Backend integration for permanent storage
- User authentication/login
- Comments on photos
- Like/reaction system
- Photo download option
- Share to social media
- Match statistics integration
- Video upload support

## 🤝 Support

For questions or issues:
1. Check this README file
2. Review the code comments in `script.js`
3. Test in a different browser
4. Clear browser cache and reload

## 📜 License

Free to use and modify for your cricket team!

---

**Enjoy sharing your cricket memories! 🏏📸**
