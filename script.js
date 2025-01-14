// Global variables for Three.js scene
let scene, camera, renderer, controls;

// Virtual tour data - Replace URLs with actual 360° images
const tourData = {
    1: {
        title: "Modern Luxury Villa",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
    },
    2: {
        title: "Skyline Penthouse",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
    },
    3: {
        title: "Waterfront Estate",
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=80"
    }
};

// DOM Elements
const modal = document.getElementById('tourModal');
const closeModal = document.querySelector('.close-modal');
const tourButtons = document.querySelectorAll('.tour-button');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

// Initialize Three.js scene
function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    
    const container = document.getElementById('tourViewer');
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // Add controls for camera movement
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;
    
    camera.position.z = 0.1;
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Load 360° image for virtual tour
function loadTour(tourId) {
    const tour = tourData[tourId];
    if (!tour) return;
    
    // Create sphere geometry for 360° view
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert the sphere so the image is on the inside
    
    // Load texture
    const texture = new THREE.TextureLoader().load(tour.imageUrl);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    
    // Create and add mesh to scene
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

// Event Listeners
tourButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tourId = button.getAttribute('data-tour-id');
        modal.style.display = 'block';
        initThreeJS();
        loadTour(tourId);
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    // Clean up Three.js scene
    if (renderer) {
        renderer.dispose();
        const container = document.getElementById('tourViewer');
        container.innerHTML = '';
    }
});

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        property: document.getElementById('propertySelect').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you! We will contact you soon to schedule your virtual tour.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Window resize handler
window.addEventListener('resize', () => {
    if (renderer) {
        const container = document.getElementById('tourViewer');
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to property cards
    const cards = document.querySelectorAll('.property-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});