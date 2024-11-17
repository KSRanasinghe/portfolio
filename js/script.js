document.addEventListener('DOMContentLoaded', () => {
    // Select all the nav links and sections
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    // Function to remove active class from all nav links
    const removeActiveClass = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };

    // Create an IntersectionObserver to track sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the ID of the current visible section
                const id = entry.target.id;

                // Find the corresponding nav link and set it as active
                const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
                if (activeLink) {
                    removeActiveClass();
                    activeLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.6 }); // Trigger when 60% of the section is visible

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // Click event listener for collapsing navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Collapse the navbar
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});

 // Get the current year and set it in the year element
 document.getElementById("year").textContent = new Date().getFullYear();
