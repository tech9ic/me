// // Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
    observer.observe(section);
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("text-blue-600");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("text-blue-600");
        }
    });
});


// Hamburger menu toggle
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");  // Toggle the 'active' class to show/hide the menu
});


// Certificates pop-up effect
const certificates = document.querySelectorAll(".certificate-card");

certificates.forEach(card => {
    card.addEventListener("click", () => {
        const certificateTitle = card.querySelector("h3").textContent;
        alert("Details about " + certificateTitle);
    });
});
