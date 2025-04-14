
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('shown.bs.tab', function () {
            // Remove 'active' from all buttons manually
            navLinks.forEach(btn => btn.classList.remove('active'));

            // Add 'active' to clicked one
            this.classList.add('active');
        });
    });
    const modelButtons = document.querySelectorAll(".model-buttons button");

    modelButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modelButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });