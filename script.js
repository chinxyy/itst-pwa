document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const logo = document.getElementById('logo');
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    const landingPage = document.getElementById('home');
    const options = document.querySelectorAll('.option');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.style.display = 'none';
                section.style.opacity = 0; // Reset opacity for fade-in effect
            });

            targetSection.style.display = 'block';

            // Add fade-in animation
            setTimeout(() => {
                targetSection.style.opacity = 1;
            }, 10);

            menu.classList.remove('show');
        });
    });

    logo.addEventListener('click', function () {
        sections.forEach(section => {
            section.style.display = 'none';
            section.style.opacity = 0; // Reset opacity for fade-in effect
        });

        landingPage.style.display = 'flex'; // Show the landing page
        landingPage.style.opacity = 1; // Fade in the landing page
    });

    // Add event listener to each option
    options.forEach(option => {
        option.addEventListener('click', function () {
            // Add your option's functionality here
            // For example, you can toggle classes or perform any other action
            option.classList.toggle('active');
        });
    });
});
