document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || "index.html";

  // Highlight active menu item
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Dynamic breadcrumb generation
  const breadcrumbLabels = {
    "index.html": "Home",
    "about.html": "About",
    "trading.html": "Trading Name",
    "services.html": "Services",
    "calibration.html": "Calibration",
    "education.html": "Education",
    "clients.html": "Clients",
    "contacts.html": "Contacts",
    "network_services.html": "Network Services",
    "system_solutions.html": "System Solutions",
    "training.html": "Training",
    "design_consultancy.html": "Design & Consultancy",
    "online_training.html": "Online Training",
    "business_solutions.html": "Business Solutions",
    "education_services.html": "Education Services",
    "calibration_services.html": "Calibration Services – IT Tools",
    "it_auditing.html": "IT Auditing"
  };

  const breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    const label = breadcrumbLabels[currentPage] || "Home";
    if (currentPage === "index.html") {
      breadcrumb.innerHTML = `<a href="index.html">Home</a>`;
    } else {
      breadcrumb.innerHTML = `<a href="index.html">Home</a> &gt; ${label}`;
    }
  }

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    // Close menu after a link is tapped (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 780) {
          nav.classList.remove('nav-open');
          toggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });
  }

  // Scroll fade-in reveal
  const revealTargets = document.querySelectorAll('.section, .card, .client-card, .contacts-card, .service-card, .hero');
  revealTargets.forEach(el => el.classList.add('fade-in'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }
});
