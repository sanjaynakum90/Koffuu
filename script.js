 // Nav active link
        document.addEventListener("DOMContentLoaded", () => {
            const navLinks = document.querySelectorAll("#navbarNav .nav-link");
            const sections = Array.from(navLinks).map(link => {
                const href = link.getAttribute("href");
                const sectionId = href && href.startsWith("#") ? href.slice(1) : null;
                return sectionId ? document.getElementById(sectionId) : null;
            });
            function setActiveLink() {
                let scrollY = window.scrollY + 200;
                navLinks.forEach(link => link.classList.remove("active"));
                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section && scrollY >= section.offsetTop) {
                        navLinks[i].classList.add("active");
                        break;
                    }
                }
            }
            window.addEventListener("scroll", setActiveLink);
            window.addEventListener("load", setActiveLink);
        });

        // Swiper setup for #catSlider, #testiSlider, #partnerSlider
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector("#catSlider"))
                new Swiper("#catSlider", {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    speed: 800,
                    autoplay: { delay: 3000, disableOnInteraction: false },
                    effect: 'coverflow',
                    coverflowEffect: { rotate: 20, stretch: 0, depth: 300, modifier: 1, slideShadows: true },
                    grabCursor: true,
                    pagination: { el: ".swiper-pagination", clickable: true },
                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                    breakpoints: { 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }
                });

            if (document.querySelector("#testiSlider"))
                new Swiper("#testiSlider", {
                    effect: 'coverflow', grabCursor: true, centeredSlides: true,
                    slidesPerView: 3, spaceBetween: 30, loop: true, speed: 800,
                    autoplay: { delay: 3000, disableOnInteraction: false },
                    coverflowEffect: { rotate: 0, stretch: 0, depth: 200, modifier: 2, slideShadows: true },
                    pagination: { el: ".swiper-pagination", clickable: true },
                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                    breakpoints: {
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }
                });

            if (document.querySelector("#partnerSlider"))
                new Swiper("#partnerSlider", {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    loop: true,
                    speed: 4000,
                    autoplay: { delay: 0, disableOnInteraction: false },
                    allowTouchMove: false,
                    breakpoints: { 0: { slidesPerView: 2 }, 768: { slidesPerView: 4 }, 992: { slidesPerView: 6 } }
                });
        });

        // "Add to cart" counter
        document.addEventListener("DOMContentLoaded", function () {
            var addBtns = document.querySelectorAll(".add-icon");
            var counters = document.querySelectorAll(".order-count");
            var count = 0;
            addBtns.forEach(btn => {
                btn.style.cursor = "pointer";
                btn.addEventListener("click", function () {
                    count++;
                    counters.forEach(counter => { counter.textContent = count + "+"; });
                });
            });
        });

        // Like toggle for testimonials
        function toggleLike(el) {
            const icon = el.querySelector('i');
            const isActive = el.getAttribute('data-active') === 'true';
            el.setAttribute('data-active', !isActive);
            icon.classList.toggle('ri-heart-line', isActive);
            icon.classList.toggle('ri-heart-fill', !isActive);
        }

