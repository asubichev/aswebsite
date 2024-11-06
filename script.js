const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        } else {
            entry.target.classList.remove('reveal');
        }
    });
});

// Get both types of hidden elements
const hiddenElements = document.querySelectorAll('.hidden, .hidden-top');
hiddenElements.forEach((el) => observer.observe(el));
