// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const createMobileMenu = () => {
  const nav = document.querySelector(".nav-menu");
  const navContainer = document.querySelector(".nav-container");

  // Create hamburger button
  const hamburger = document.createElement("button");
  hamburger.className = "hamburger";
  hamburger.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;
  hamburger.setAttribute("aria-label", "Toggle menu");

  // Add styles for hamburger
  const style = document.createElement("style");
  style.textContent = `
        .hamburger {
            display: none;
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: block;
            }
            
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                flex-direction: column;
                background-color: #000;
                width: 100%;
                text-align: center;
                transition: left 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                padding: 2rem 0;
                border-top: 1px solid #333;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu li {
                margin: 1rem 0;
            }
        }
    `;
  document.head.appendChild(style);

  // Insert hamburger before nav icons
  navContainer.insertBefore(hamburger, document.querySelector(".nav-icons"));

  // Toggle menu
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
};

// Initialize mobile menu
if (window.innerWidth <= 768) {
  createMobileMenu();
}

// Handle form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);

    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert("Thank you for your message! We will get back to you soon.");

    // Reset form
    contactForm.reset();
  });
}

// Handle newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Here you would typically send the email to a server
    alert(`Thank you for subscribing with: ${email}`);

    // Reset form
    newsletterForm.reset();
  });
}

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const highlightNav = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
};

// Add active link styles
const activeStyle = document.createElement("style");
activeStyle.textContent = `
    .nav-link.active {
        opacity: 1;
        border-bottom: 2px solid #fff;
    }
`;
document.head.appendChild(activeStyle);

window.addEventListener("scroll", highlightNav);

// Lazy loading for images
const images = document.querySelectorAll("img");
const imageOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px 50px 0px",
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add("fade-in");
      observer.unobserve(img);
    }
  });
}, imageOptions);

images.forEach((img) => {
  imageObserver.observe(img);
});

// Add fade-in animation
const fadeStyle = document.createElement("style");
fadeStyle.textContent = `
    img {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    
    img.fade-in {
        opacity: 1;
    }
`;
document.head.appendChild(fadeStyle);

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const overlay = item.querySelector(".gallery-overlay p");

    // Create lightbox
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${img.src}" alt="${img.alt}">
                <p>${overlay ? overlay.textContent : ""}</p>
            </div>
        `;

    document.body.appendChild(lightbox);

    // Close lightbox
    const closeBtn = lightbox.querySelector(".lightbox-close");
    closeBtn.addEventListener("click", () => {
      lightbox.remove();
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });
  });
});

// Add lightbox styles
const lightboxStyle = document.createElement("style");
lightboxStyle.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        opacity: 1;
        border-radius: 8px;
    }
    
    .lightbox-content p {
        color: #fff;
        margin-top: 1rem;
        font-size: 1.1rem;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: #fff;
        font-size: 3rem;
        cursor: pointer;
        line-height: 1;
        transition: opacity 0.3s;
    }
    
    .lightbox-close:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(lightboxStyle);

console.log("Team Scipio website loaded successfully!");
