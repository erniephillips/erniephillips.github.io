document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector(".menu-toggle");
    var navLinks = document.querySelector(".nav-links");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function closeMenu() {
        if (!menuToggle || !navLinks) {
            return;
        }

        menuToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            var isOpen = menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            navLinks.classList.toggle("is-open", !isOpen);
            document.body.classList.toggle("menu-open", !isOpen);
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
                menuToggle.focus();
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            var targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            var target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();
            closeMenu();
            target.scrollIntoView({
                behavior: reduceMotion.matches ? "auto" : "smooth",
                block: "start"
            });
        });
    });
});
