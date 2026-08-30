/* ============================================
   Bhavnoor Singh — Portfolio
   Main JavaScript
   ============================================ */

// Immediate Theme Initialization to avoid Flash of Unstyled Content
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  /* ---------- Centralized Copyright Year ---------- */
  const yearEls = document.querySelectorAll('#year, .current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = currentYear;
  });

  /* ---------- Theme Switcher ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  /* ---------- Navbar Toggle (Mobile) with ARIA ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('open')) {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Navbar Scroll Effect ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ---------- Robust Active Nav Link Detection ---------- */
  const rawPath = window.location.pathname.replace(/\/$/, '');
  let currentPage = rawPath.split('/').pop() || 'index.html';
  if (currentPage === '' || currentPage === 'index') {
    currentPage = 'index.html';
  }
  if (!currentPage.includes('.')) {
    currentPage += '.html';
  }

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (
      href === currentPage ||
      (currentPage === 'index.html' && (href === 'index.html' || href === './' || href === '/'))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
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

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
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
      { threshold: 0.2 }
    );

    skillBars.forEach(function (bar) {
      skillObserver.observe(bar);
    });
  }

  /* ---------- Projects Filtering (projects.html) ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(function (card) {
          const categories = card.getAttribute('data-category') || '';
          if (filterValue === 'all' || categories.toLowerCase().includes(filterValue.toLowerCase())) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /* ---------- Contact Form Handler ---------- */
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

  /* ---------- Copy to Clipboard with Fallback ---------- */
  function copyTextToClipboard(text, successCb, errorCb) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(successCb).catch(function () {
        fallbackCopyText(text, successCb, errorCb);
      });
    } else {
      fallbackCopyText(text, successCb, errorCb);
    }
  }

  function fallbackCopyText(text, successCb, errorCb) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        successCb();
      } else if (errorCb) {
        errorCb();
      }
    } catch (err) {
      document.body.removeChild(textArea);
      if (errorCb) {
        errorCb(err);
      }
    }
  }

  const copyEmailBtn = document.querySelector('.copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      const email = copyEmailBtn.getAttribute('data-email');
      const valEl = copyEmailBtn.querySelector('.value');
      if (email && valEl) {
        const originalText = valEl.textContent;
        copyTextToClipboard(email, function () {
          valEl.textContent = 'Copied to clipboard!';
          setTimeout(function () {
            valEl.textContent = originalText;
          }, 2000);
        });
      }
    });
  }
});









