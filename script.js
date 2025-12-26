// Function to handle active states on scroll
const handleScrollHighlight = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSectionId = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // If the scroll position is within the section (with a small offset)
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
};

// Listen for scroll events
window.addEventListener('scroll', handleScrollHighlight);

// Run once on load to set initial state
window.addEventListener('load', handleScrollHighlight);