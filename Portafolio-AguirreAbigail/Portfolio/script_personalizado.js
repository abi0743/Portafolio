document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, {
        threshold: 0.2 
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
