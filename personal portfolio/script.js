// main.js
        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Back to Top Button
        // const backToTopButton = document.querySelector('.back-to-top');
        
        // window.addEventListener('scroll', () => {
        //     if (window.pageYOffset > 300) {
        //         backToTopButton.classList.add('active');
        //     } else {
        //         backToTopButton.classList.remove('active');
        //     }
        // });
        
        // backToTopButton.addEventListener('click', () => {
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     });
        // });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .certification-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state for animated elements
        document.querySelectorAll('.timeline-item, .skill-category, .project-card, .certification-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Auto-update copyright year
        document.getElementById('year').textContent = new Date().getFullYear();
