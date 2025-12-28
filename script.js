// Sample data for demonstration (in a real app, this would come from a backend)
let photos = [];
let teamMembers = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Load sample data
    loadSampleData();
    displayGallery();
    displayTeamMembers();
    setupUploadArea();
    setupMobileMenu();
});

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Load sample data
function loadSampleData() {
    // Sample photos with placeholder images and social data
    photos = [
        {
            id: 1,
            url: 'https://via.placeholder.com/800x600/0d47a1/ffffff?text=Cool+Blue+Match',
            caption: 'Championship Final - Victory! What an amazing match! 🏆',
            uploadedBy: 'Abdul',
            date: '2024-12-25',
            category: 'matches',
            likes: 24,
            liked: false,
            comments: [
                { author: 'Saravana', text: 'Great game! You played amazingly!', date: '2024-12-25' },
                { author: 'Saranraj', text: 'Best match of the season! 🔥', date: '2024-12-25' }
            ]
        },
        {
            id: 2,
            url: 'https://via.placeholder.com/800x600/1976d2/ffffff?text=Practice+Session',
            caption: 'Morning practice session 💪 Getting ready for the big game!',
            uploadedBy: 'Saravana',
            date: '2024-12-20',
            category: 'practice',
            likes: 15,
            liked: false,
            comments: [
                { author: 'Abdul', text: 'Keep up the hard work!', date: '2024-12-20' }
            ]
        },
        {
            id: 3,
            url: 'https://via.placeholder.com/800x600/0d47a1/ffffff?text=Team+Celebration',
            caption: 'Celebrating our win! Team spirit at its best! 🎉',
            uploadedBy: 'Saranraj',
            date: '2024-12-26',
            category: 'celebrations',
            likes: 32,
            liked: true,
            comments: [
                { author: 'Abdul', text: 'What a celebration!', date: '2024-12-26' },
                { author: 'Saravana', text: 'Love this team! 💙', date: '2024-12-26' }
            ]
        },
        {
            id: 4,
            url: 'https://via.placeholder.com/800x600/1976d2/ffffff?text=Cool+Blue+Trophy',
            caption: 'Holding the trophy high! Champions 2024! 🏆',
            uploadedBy: 'Abdul',
            date: '2024-12-26',
            category: 'celebrations',
            likes: 45,
            liked: true,
            comments: [
                { author: 'Saranraj', text: 'We did it! 🎊', date: '2024-12-26' }
            ]
        },
        {
            id: 5,
            url: 'https://via.placeholder.com/800x600/0d47a1/ffffff?text=Batting+Practice',
            caption: 'Batting practice before the match. Focus and determination!',
            uploadedBy: 'Saravana',
            date: '2024-12-22',
            category: 'practice',
            likes: 18,
            liked: false,
            comments: []
        },
        {
            id: 6,
            url: 'https://via.placeholder.com/800x600/1976d2/ffffff?text=Cool+Blue+Team',
            caption: 'Team photo before the match. Let\'s do this! 💙',
            uploadedBy: 'Saranraj',
            date: '2024-12-24',
            category: 'matches',
            likes: 28,
            liked: false,
            comments: [
                { author: 'Abdul', text: 'Looking sharp team!', date: '2024-12-24' }
            ]
        }
    ];

    // Sample team members
    teamMembers = [
        { name: 'Abdul', role: 'Captain', photosUploaded: 0, avatar: '👨' },
        { name: 'Saravana', role: 'All-Rounder', photosUploaded: 0, avatar: '🧑' },
        { name: 'Saranraj', role: 'Batsman', photosUploaded: 0, avatar: '👨' }
    ];
}

// Setup upload area drag and drop
function setupUploadArea() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');

    // Click to upload
    uploadArea.addEventListener('click', () => fileInput.click());

    // Drag and drop events
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'rgba(30, 136, 229, 0.1)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = '';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = '';
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // File input change
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

// Handle selected files
function handleFiles(files) {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = '';

    Array.from(files).forEach((file, index) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                previewItem.innerHTML = `
                    <img src="${e.target.result}" alt="Preview">
                    <button class="preview-remove" onclick="removePreview(this)">×</button>
                `;
                previewContainer.appendChild(previewItem);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Remove preview image
function removePreview(button) {
    button.parentElement.remove();
}

// Get current logged in user (simulated - in real app this would come from authentication)
function getCurrentUser() {
    return document.getElementById('currentUser').textContent;
}

// Upload photos
function uploadPhotos() {
    const memberName = getCurrentUser(); // Auto-get from logged in user
    const caption = document.getElementById('photoCaption').value;
    const category = document.getElementById('photoCategory').value;
    const previewContainer = document.getElementById('previewContainer');

    if (previewContainer.children.length === 0) {
        alert('Please select at least one photo');
        return;
    }

    // Get all preview images
    const previewImages = previewContainer.querySelectorAll('img');
    
    // Add photos to gallery with auto timestamp
    const currentDateTime = new Date().toISOString();
    
    previewImages.forEach((img, index) => {
        const newPhoto = {
            id: photos.length + index + 1,
            url: img.src,
            caption: caption || 'No caption',
            uploadedBy: memberName,
            date: currentDateTime, // Auto timestamp
            category: category,
            likes: 0,
            liked: false,
            comments: []
        };
        photos.unshift(newPhoto);
    });

    // Show success message with count and auto-timestamp info
    const photoCount = previewImages.length;
    const timestamp = new Date().toLocaleString();
    showSuccessMessage(`${photoCount} photo${photoCount > 1 ? 's' : ''} uploaded successfully! Timestamp: ${timestamp}`);

    // Reset form
    document.getElementById('photoCaption').value = '';
    document.getElementById('photoCategory').value = 'matches';
    previewContainer.innerHTML = '';
    document.getElementById('fileInput').value = '';

    // Refresh gallery
    displayGallery();

    // Scroll to gallery
    setTimeout(() => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// Show success message
function showSuccessMessage(message) {
    const uploadCard = document.querySelector('.upload-card');
    const existingMsg = uploadCard.querySelector('.success-message');
    
    if (existingMsg) {
        existingMsg.remove();
    }

    const successMsg = document.createElement('div');
    successMsg.className = 'success-message show';
    successMsg.textContent = message;
    uploadCard.insertBefore(successMsg, uploadCard.firstChild);

    setTimeout(() => {
        successMsg.remove();
    }, 3000);
}

// Display gallery as social feed
function displayGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    const filteredPhotos = filter === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === filter);

    if (filteredPhotos.length === 0) {
        galleryGrid.innerHTML = '<p style="text-align: center; color: #757575;">No posts yet. Be the first to share!</p>';
        return;
    }

    filteredPhotos.forEach((photo, index) => {
        const socialPost = createSocialPost(photo, index);
        galleryGrid.appendChild(socialPost);
    });
}

// Create social media post card
function createSocialPost(photo, index) {
    const post = document.createElement('div');
    post.className = 'social-post';
    post.dataset.photoId = photo.id;
    
    // Initialize likes and comments if not present
    if (!photo.likes) photo.likes = Math.floor(Math.random() * 20) + 5;
    if (!photo.comments) photo.comments = [];
    if (!photo.liked) photo.liked = false;
    
    const userAvatar = getAvatarForUser(photo.uploadedBy);
    const timeAgo = getTimeAgo(photo.date);
    const categoryIcon = getCategoryIcon(photo.category);
    
    post.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">${userAvatar}</div>
            <div class="post-user-info">
                <div class="post-user-name">${photo.uploadedBy}</div>
                <div class="post-time">${timeAgo}</div>
            </div>
        </div>
        
        <img src="${photo.url}" alt="${photo.caption}" class="post-image" onclick="openModal(photos.find(p => p.id === ${photo.id}))">
        
        <div class="post-content">
            <p class="post-caption">${photo.caption}</p>
            <span class="post-category">${categoryIcon} ${photo.category}</span>
        </div>
        
        <div class="post-actions">
            <button class="action-btn ${photo.liked ? 'liked' : ''}" onclick="toggleLike(${photo.id})">
                <span class="icon">${photo.liked ? '❤️' : '🤍'}</span>
                <span class="action-count">${photo.likes}</span>
            </button>
            <button class="action-btn" onclick="toggleComments(${photo.id})">
                <span class="icon">💬</span>
                <span class="action-count">${photo.comments.length}</span>
            </button>
            <button class="action-btn" onclick="sharePost(${photo.id})">
                <span class="icon">🔗</span>
                <span>Share</span>
            </button>
        </div>
        
        <div class="post-comments" id="comments-${photo.id}">
            ${photo.comments.map(comment => `
                <div class="comment-item">
                    <div class="comment-avatar">${getAvatarForUser(comment.author)}</div>
                    <div class="comment-content">
                        <div class="comment-author">${comment.author}</div>
                        <div class="comment-text">${comment.text}</div>
                        <div class="comment-time">${getTimeAgo(comment.date)}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="add-comment">
            <input type="text" class="comment-input" placeholder="Add a comment..." id="comment-input-${photo.id}">
            <button class="comment-submit" onclick="addComment(${photo.id})">Post</button>
        </div>
    `;
    
    return post;
}

// Get avatar emoji for user
function getAvatarForUser(username) {
    const avatars = {
        'Abdul': '👨',
        'Saravana': '🧑',
        'Saranraj': '👨'
    };
    return avatars[username] || '👤';
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'matches': '🏏',
        'practice': '⚡',
        'celebrations': '🎉'
    };
    return icons[category] || '📸';
}

// Get time ago string
function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return formatDate(dateString);
}

// Toggle like on post
function toggleLike(photoId) {
    const photo = photos.find(p => p.id === photoId);
    if (!photo) return;
    
    photo.liked = !photo.liked;
    photo.likes += photo.liked ? 1 : -1;
    
    // Update the UI
    const post = document.querySelector(`[data-photo-id="${photoId}"]`);
    const likeBtn = post.querySelector('.action-btn');
    const icon = likeBtn.querySelector('.icon');
    const count = likeBtn.querySelector('.action-count');
    
    likeBtn.classList.toggle('liked');
    icon.textContent = photo.liked ? '❤️' : '🤍';
    count.textContent = photo.likes;
    
    // Add animation
    icon.style.transform = 'scale(1.5)';
    setTimeout(() => {
        icon.style.transform = 'scale(1)';
    }, 200);
}

// Toggle comments visibility
function toggleComments(photoId) {
    const commentsSection = document.getElementById(`comments-${photoId}`);
    commentsSection.classList.toggle('show');
}

// Add comment to post
function addComment(photoId) {
    const input = document.getElementById(`comment-input-${photoId}`);
    const commentText = input.value.trim();
    
    if (!commentText) return;
    
    const photo = photos.find(p => p.id === photoId);
    if (!photo) return;
    
    const newComment = {
        author: getCurrentUser(), // Use logged in user name
        text: commentText,
        date: new Date().toISOString()
    };
    
    photo.comments.push(newComment);
    input.value = '';
    
    // Update only the comments section without full refresh
    const commentsSection = document.getElementById(`comments-${photoId}`);
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `
        <div class="comment-avatar">${getAvatarForUser(newComment.author)}</div>
        <div class="comment-content">
            <div class="comment-author">${newComment.author}</div>
            <div class="comment-text">${newComment.text}</div>
            <div class="comment-time">${getTimeAgo(newComment.date)}</div>
        </div>
    `;
    commentsSection.appendChild(commentItem);
    
    // Update comment count
    const post = document.querySelector(`[data-photo-id="${photoId}"]`);
    const commentCount = post.querySelector('.action-btn:nth-child(2) .action-count');
    commentCount.textContent = photo.comments.length;
    
    // Make sure comments section is visible
    if (!commentsSection.classList.contains('show')) {
        commentsSection.classList.add('show');
    }
}

// Share post
function sharePost(photoId) {
    const photo = photos.find(p => p.id === photoId);
    if (!photo) return;
    
    // Create shareable text
    const shareText = `Check out this photo from Cool Blue Cricket Team: "${photo.caption}" by ${photo.uploadedBy}`;
    
    // Try to use Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'Cool Blue Cricket Team',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Share cancelled'));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText + '\n' + window.location.href)
            .then(() => alert('Link copied to clipboard!'))
            .catch(() => alert('Unable to share'));
    }
}

// Filter gallery
function filterGallery(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Display filtered photos
    displayGallery(category);
}

// Display team members
function displayTeamMembers() {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = '';

    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        memberCard.innerHTML = `
            <div class="team-avatar">${member.avatar}</div>
            <h3>${member.name}</h3>
            <div class="role">${member.role}</div>
            <div class="photos-count">${member.photosUploaded} photos uploaded</div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

// Open photo modal
function openModal(photo) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modal.style.display = 'block';
    modalImage.src = photo.url;
    modalCaption.innerHTML = `
        <strong>${photo.caption}</strong><br>
        Uploaded by ${photo.uploadedBy} on ${formatDate(photo.date)}
    `;
}

// Close modal
function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
