// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.header-nav')) {
        navMenu.classList.remove('active');
    }
});

// Sidebar Active Link on Scroll
const sections = document.querySelectorAll('section');
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

function updateActiveSidebarLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (current) {
        const activeLink = document.querySelector(`.sidebar-nav a[href="#${current}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

window.addEventListener('scroll', updateActiveSidebarLink);
updateActiveSidebarLink();

// Render News Posts
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';

    newsData.forEach(post => {
        const newsItem = document.createElement('article');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-item-date">
                ${formatDate(post.date)}
            </div>
            <div class="news-item-content">
                <h4>${post.title}</h4>
                <p>${post.excerpt}</p>
                <a href="#" class="news-item-read-more" onclick="scrollToSection('news'); return false;">Läs mer →</a>
            </div>
        `;
        newsGrid.appendChild(newsItem);
    });
}

// Initialize news on page load
document.addEventListener('DOMContentLoaded', function() {
    renderNews();
});

// Smooth scroll helper function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe news items and reason cards for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.news-item, .reason-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Search functionality placeholder
function searchNews(query) {
    return newsData.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );
}

// Export functions for external use
window.addNewsPost = addNewsPost;
window.getNewsPosts = getNewsPosts;
window.searchNews = searchNews;
window.formatDate = formatDate;
