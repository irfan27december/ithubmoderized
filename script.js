document.addEventListener('DOMContentLoaded', function(){

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0px)';
        });
    });

    const cards = document.querySelectorAll('.about-card, .service-card, .stat-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0px)';
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

});