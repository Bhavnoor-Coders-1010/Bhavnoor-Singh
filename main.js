/* ============================================
Bhavnoor Singh — Portfolio
Main JavaScript
============================================ */

document.addEventListener('DOMContentLoaded', function () {
/* ---------- Navbar Toggle (Mobile) ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
navToggle.addEventListener('click', function () {
navToggle.classList.toggle('open');
navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
link.addEventListener('click', function () {
navToggle.classList.remove('open');
navLinks.classList.remove('open');
});
});
}

/* ---------- Navbar Scroll Effect ---------- */
const navbar = document.querySelector('.navbar');
if (navbar) {
window.addEventListener('scroll', function () {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});
}

/* ---------- Active Nav Link ---------- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function (link) {
const href = link.getAttribute('href');
if (href === currentPage || (currentPage === '' && href === 'index.html')) {
link.classList.add('active');
}
});

/* ---------- Scroll Reveal Animations ---------- */
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
const observer = new IntersectionObserver(
function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
},
{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(function (el) {
observer.observe(el);
});
} else {
// Fallback: just show everything
revealElements.forEach(function (el) {
el.classList.add('visible');
});
}

/* ---------- Typewriter Effect (Home Page) ---------- */
const typewriterEl = document.querySelector('.hero-role .typewriter-text');
if (typewriterEl) {
const roles = [
'Computer Science Engineer',
'Deep Learning Researcher',
'Brain-Computer Interface Developer',
'Full-Stack Builder',
 ];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
const currentRole = roles[roleIndex];

if (isDeleting) {
charIndex--;
} else {
charIndex++;
}

typewriterEl.textContent = currentRole.substring(0, charIndex);

let typeSpeed = isDeleting ? 50 : 100;

if (!isDeleting && charIndex === currentRole.length) {
typeSpeed = 2000; // Pause at full word
isDeleting = true;
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
roleIndex = (roleIndex + 1) % roles.length;
typeSpeed = 500; // Pause before next word
}

setTimeout(type, typeSpeed);
}

type();
}

/* ---------- Skill Bar Animation ---------- */
const skillBars = document.querySelectorAll('.skill-bar-fill');
if (skillBars.length > 0 && 'IntersectionObserver' in window) {
const skillObserver = new IntersectionObserver(
function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
const fill = entry.target;
const level = fill.getAttribute('data-level');
fill.style.width = level + '%';
skillObserver.unobserve(fill);
}
});
},
{ threshold: 0.3 }
);

skillBars.forEach(function (bar) {
skillObserver.observe(bar);
});
}

/* ---------- Contact Form ---------- */
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
contactForm.addEventListener('submit', function (e) {
e.preventDefault();

const name = contactForm.querySelector('#name').value.trim();
const email = contactForm.querySelector('#email').value.trim();
const subject = contactForm.querySelector('#subject').value.trim();
const message = contactForm.querySelector('#message').value.trim();
const statusEl = document.querySelector('.form-status');

if (!name || !email || !message) {
if (statusEl) {
statusEl.className = 'form-status error';
statusEl.textContent = 'Please fill in all required fields.';
}
return;
}

// Build mailto link
const mailtoSubject = subject || 'Portfolio Contact from ' + name;
const mailtoBody = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
const mailtoLink =
'mailto:singh.bhavnoor.4854@gmail.com?subject=' +
encodeURIComponent(mailtoSubject) +
'&body=' +
encodeURIComponent(mailtoBody);

window.location.href = mailtoLink;

if (statusEl) {
statusEl.className = 'form-status success';
statusEl.textContent = 'Opening your email client... Thank you for reaching out!';
}

contactForm.reset();
});
}

/* ---------- Copy Email to Clipboard ---------- */
const copyEmailBtn = document.querySelector('.copy-email');
if (copyEmailBtn) {
copyEmailBtn.addEventListener('click', function () {
const email = copyEmailBtn.getAttribute('data-email');
if (navigator.clipboard && email) {
navigator.clipboard.writeText(email).then(function () {
const originalText = copyEmailBtn.querySelector('.value').textContent;
copyEmailBtn.querySelector('.value').textContent = 'Copied!';
setTimeout(function () {
copyEmailBtn.querySelector('.value').textContent = originalText;
}, 2000);
});
}
});
}
});









