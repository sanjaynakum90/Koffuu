
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#navbarNav .nav-link");
   
    const sections = Array.from(navLinks).map(link => {
        const href = link.getAttribute("href");
        const sectionId = href.includes("#") ? href.split("#")[1] : null;
        return sectionId ? document.getElementById(sectionId) : null;
    });

    function setActiveLink() {
        let scrollY = window.scrollY + 200; // Offset for fixed navbar

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

//swiper javascript
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper("#catSlider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });
});
document.querySelectorAll('.order-item-row').forEach(row => {
    row.addEventListener('mouseenter', () => row.style.backgroundColor = 'rgba(0, 123, 255, 0.1)');
    row.addEventListener('mouseleave', () => row.style.backgroundColor = '');
});
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper("#testiSlider", {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.5,
                }
            },
            768: {
                slidesPerView: 2,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                }
            },
            992: {
                slidesPerView: 3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper("#partnerSlider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        breakpoints: {
            0: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 6 },
        },
    });
});



// add to cart
var add = document.querySelectorAll(".add-icon");
var counters = document.querySelectorAll(".order-count");
var count = 0;
add.forEach(btn => {
    btn.style.cursor = "pointer";
    btn.addEventListener("click", function () {
        count++;
        counters.forEach(counter => {
            counter.textContent = count + "+";
        });
    });
});


//add and remove item quntity
document.querySelectorAll(".item-row").forEach(row => {
    const incBtn = row.querySelector(".add-qty");
    const decBtn = row.querySelector(".remove-qty");
    const qtyDisplay = row.querySelector(".qty-num");

    var count = 0;

    incBtn.addEventListener("click", () => {
        count++;
        qtyDisplay.textContent = count;
    });

    decBtn.addEventListener("click", () => {
        if (count > 1) {
            count--;
        }
        qtyDisplay.textContent = count;
    });
});


//remove perticular item order
var rmvbtn = document.querySelectorAll(".remove-btn");

rmvbtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const itemRow = btn.closest(".order-item-row");

        if (itemRow) {
            // Animate the row before removing it
            gsap.to(itemRow, {
                x: 50,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    itemRow.style.display = "none";

                }
            });
        }
    });
});

function toggleLike(el) {
    const icon = el.querySelector('i');
    const isActive = el.getAttribute('data-active') === 'true';

    el.setAttribute('data-active', !isActive);

    // Toggle icon classes between outlined and filled
    icon.classList.toggle('ri-heart-line', isActive);
    icon.classList.toggle('ri-heart-fill', !isActive);
}
// GSAP Animation for Navbar
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Single timeline for all navbar animations
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

    // Navbar animation
    tl.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1
    })
        .from('.navbar-brand', {
            x: -50,
            opacity: 0,
            ease: "back.out(1.7)"
        }, "-=0.8")
        .from('.navbar-nav .nav-item', {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.6")
        .from('#navbarAnimated > *', {
            x: 50,
            opacity: 0,
            stagger: 0.15,
            ease: "back.out(1.4)"
        }, "-=0.8");

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scrolled-down')) {
            gsap.to(navbar, { y: -100, duration: 0.3 });
            navbar.classList.add('scrolled-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled-down')) {
            gsap.to(navbar, { y: 0, duration: 0.3 });
            navbar.classList.remove('scrolled-down');
        }

        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }

        lastScroll = currentScroll;
    });

});

// Hero Section Animation
const heroSection = document.querySelector('.hero-section-primary');
if (heroSection) {
    // Initial hide
    gsap.set('.hero-section-primary .overlay', { opacity: 0 });
    gsap.set('.carousel-item img', { scale: 1.1, opacity: 0 });
    gsap.set('.hero-section-primary .section-title', { y: 50, opacity: 0 });
    gsap.set('.hero-section-primary p', { y: 30, opacity: 0 });
    gsap.set('.hero-section-primary .btn', { y: 30, opacity: 0, scale: 0.9 });

    // Create hero animation timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate overlay
    heroTl.to('.hero-section-primary .overlay', {
        opacity: 1,
        duration: 1
    });

    // Animate first carousel image
    heroTl.to('.carousel-item.active img', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.inOut"
    }, "-=0.5");

    // Animate title lines with stagger
    heroTl.to('.hero-section-primary .section-title', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.2)"
    }, "-=0.5");

    // Animate paragraph
    heroTl.to('.hero-section-primary p', {
        y: 0,
        opacity: 1,
        duration: 0.8
    }, "-=0.5");

    // Animate button with elastic effect
    heroTl.to('.hero-section-primary .btn', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.3");

    // Carousel slide change animation
    const carousel = document.querySelector('#carouselExample');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function (e) {
            const activeImg = e.relatedTarget.querySelector('img');
            const nextImg = e.relatedTarget.nextElementSibling?.querySelector('img') ||
                document.querySelector('.carousel-inner').firstElementChild.querySelector('img');

            gsap.fromTo(activeImg,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }
            );

            // Preload next image
            if (nextImg) {
                const img = new Image();
                img.src = nextImg.src;
            }
        });
    }


}

// Coffee Categories Animation
const categoriesSection = document.querySelector('.section-bg-light.overflow-hidden');
if (categoriesSection) {
    // Initial hide
    gsap.set('.section-bg-light .d-flex > div', {
        y: 50,
        opacity: 0,
        scale: 0.9
    });

    // Create scroll trigger for the categories section
    gsap.timeline({
        scrollTrigger: {
            trigger: '.section-bg-light',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    })
        .to('.section-bg-light .d-flex > div', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: {
                amount: 0.6,
                from: 'random'
            },
            ease: 'back.out(1.2)'
        });

    // Add hover effects
    document.querySelectorAll('#menu .d-flex > div').forEach((item, index) => {
        // Initial state
        gsap.set(item, {
            transformOrigin: 'center bottom',
            willChange: 'transform'
        });

        // Hover animation
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });

            // Bounce effect on the icon
            gsap.to(item.querySelector('img'), {
                y: -5,
                duration: 0.4,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });
        });

        // Click animation
        item.addEventListener('click', () => {
            gsap.to(item, {
                scale: 0.95,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });
    });
}

// About Section Animation - Enhanced Version
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    // Initial hide
    gsap.set('#about .col-lg-6', {
        x: -100,
        opacity: 0
    });

    gsap.set('#about .col-lg-5', {
        x: 100,
        opacity: 0
    });

    gsap.set(['.img-1', '.img-2', '.img-3'], {
        opacity: 0,
        y: 30
    });

    // Scroll trigger
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });

    // Text and image fade + slide
    aboutTl
        .to('#about .col-lg-6', {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        })
        .to('#about .col-lg-5', {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.img-1', {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.3')
        .to('.img-2', {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.3')
        .to('.img-3', {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.3');

    // Simple hover effect on badge
    gsap.utils.toArray('#about .badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            gsap.to(badge, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power1.out'
            });
        });

        badge.addEventListener('mouseleave', () => {
            gsap.to(badge, {
                scale: 1,
                duration: 0.2,
                ease: 'power1.out'
            });
        });
    });

    // Button hover simplified
    const aboutButton = document.querySelector('#about .btn-outline');
    if (aboutButton) {
        aboutButton.addEventListener('mouseenter', () => {
            gsap.to(aboutButton, {
                scale: 1.05,
                duration: 0.2
            });
        });

        aboutButton.addEventListener('mouseleave', () => {
            gsap.to(aboutButton, {
                scale: 1,
                duration: 0.2
            });
        });
    }
}


// Categories and Products Animation
const topCategoriesSection = document.querySelector('#categories');
if (topCategoriesSection) {
    // Initial hide states
    gsap.set('#categories .swiper', { y: 50, opacity: 0 });
    gsap.set('.item-overview', { y: 30, opacity: 0 });
    gsap.set('.item-card', { y: 30, opacity: 0, scale: 0.97 });

    // Scroll trigger animation
    const categoriesTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#categories',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });

    categoriesTl
        .to('#categories .swiper', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.item-overview', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.item-card', {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3');

    // Hover & Click Effects
    document.querySelectorAll('.item-card').forEach((card) => {
        const addToCartBtn = card.querySelector('.btn-primary');
        if (addToCartBtn) {
            // Hover in
            addToCartBtn.addEventListener('mouseenter', () => {
                gsap.to(addToCartBtn, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: 'power1.out'
                });
            });

            // Hover out
            addToCartBtn.addEventListener('mouseleave', () => {
                gsap.to(addToCartBtn, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power1.out'
                });
            });

            // Click tap effect
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                gsap.to(addToCartBtn, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power1.inOut'
                });
                console.log('Added to cart');
            });
        }
    });
}


// Gallery Section Animation
const gallerySection = document.querySelector('#gallery');
if (gallerySection) {
    // Initial hide
    gsap.set('#gallery h1, #gallery p', {
        y: 50,
        opacity: 0
    });

    gsap.set('.gallery-card', {
        y: 80,
        opacity: 0,
        scale: 0.95
    });

    // Create timeline for gallery animations
    const galleryTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Animate title and description
    galleryTl
        .to('#gallery h1', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        })
        .to('#gallery p', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');

    // Staggered animation for gallery cards
    gsap.utils.toArray('.gallery-card').forEach((card, i) => {
        // Random delay between 0 and 0.5 seconds
        const delay = i * 0.1;

        gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: delay,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        // Hover effect
        const img = card.querySelector('img');
        const overlay = card.querySelector('.overlay');
        const text = card.querySelector('.img-text');

        // Initial state
        gsap.set(overlay, {
            backgroundColor: 'rgba(0,0,0,0.6)',
            opacity: 0
        });
        gsap.set(text, {
            y: 20,
            opacity: 0
        });

        // Hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            });

            gsap.to(img, {
                scale: 1.1,
                duration: 0.8,
                ease: 'power2.out'
            });

            gsap.to(overlay, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            });

            gsap.to(text, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.6,
                ease: 'elastic.out(1, 0.5)'
            });

            gsap.to(img, {
                scale: 1,
                duration: 0.8,
                ease: 'power2.inOut'
            });

            gsap.to(overlay, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in'
            });

            gsap.to(text, {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            });
        });
    });
}

// Testimonials Section Animation
const testimonialsSection = document.querySelector('.testimonial-swiper');
if (testimonialsSection) {
    // Animation for section title
    gsap.from('.section-bg-dark h1, .section-bg-dark h6', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.section-bg-dark',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });




    // Like button animation
    document.querySelectorAll('.like-icon').forEach(likeBtn => {
        likeBtn.addEventListener('click', function () {
            const heartLine = this.querySelector('.like-icon-1 i');
            const heartFill = this.querySelector('.like-icon-2 i');

            if (heartLine.style.display !== 'none') {
                gsap.to(heartFill, {
                    scale: 1.3,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            }

            heartLine.style.display = heartLine.style.display === 'none' ? 'block' : 'none';
            heartFill.style.display = heartFill.style.display === 'none' ? 'block' : 'none';
        });
    });
}

// Blog Section Animation
const blogSection = document.querySelector('#blog');
if (blogSection) {
    // Initial hide
    gsap.set('#blog .card', {
        y: 50,
        opacity: 0
    });

    gsap.set('#blog h2, #blog p, #blog .social-group-icon', {
        y: 30,
        opacity: 0
    });

    // Create timeline for blog animations
    const blogTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#blog',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Animate title and social icons
    blogTl
        .to('#blog h2', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        })
        .to('#blog p', {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out'
        }, '-=0.3')
        .to('#blog .social-group-icon', {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1
        }, '-=0.5');

    // Animate blog cards with staggered delay
    document.querySelectorAll('#blog .card').forEach((card, index) => {
        const img = card.querySelector('img');
        const content = card.querySelector('.card-body');

        // Initial state for image and content
        gsap.set([img, content], {
            opacity: 0
        });

        // Set initial position based on card index
        if (index % 2 === 0) {
            gsap.set(img, { x: -50 });
            gsap.set(content, { x: 50 });
        } else {
            gsap.set(img, { x: 50 });
            gsap.set(content, { x: -50 });
        }

        // Animation on scroll
        gsap.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onComplete: () => {
                // Animate image and content
                gsap.to(img, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                });

                gsap.to(content, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power3.out'
                });
            }
        });

        // Hover effect for cards
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                duration: 0.4,
                ease: 'power2.out'
            });

            // Scale up image slightly
            gsap.to(img, {
                scale: 1.03,
                duration: 0.6,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                duration: 0.6,
                ease: 'elastic.out(1, 0.5)'
            });

            // Reset image scale
            gsap.to(img, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.inOut'
            });
        });

        // Animate read more link
        const readMore = card.querySelector('a');
        if (readMore) {
            readMore.addEventListener('mouseenter', () => {
                gsap.to(readMore, {
                    x: 5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            readMore.addEventListener('mouseleave', () => {
                gsap.to(readMore, {
                    x: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Social icons hover effect
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// Booking Section Animation
const bookingSection = document.querySelector('#reservation');
if (bookingSection) {
    // Initial hide
    gsap.set('#reservation .overlay', {
        scaleX: 0,
        transformOrigin: "left center"
    });

    gsap.set('#reservation .booking-img', {
        scale: 1.1,
        filter: 'blur(5px)'
    });

    gsap.set('#reservation .text-secondary, #reservation .section-title, #reservation .btn-custom', {
        y: 30,
        opacity: 0
    });

    // Create timeline for booking animations
    const bookingTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#reservation',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Animate overlay and background
    bookingTl
        .to('#reservation .overlay', {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.inOut'
        })
        .to('#reservation .booking-img', {
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power2.out'
        }, '-=1')
        .to('#reservation .text-secondary', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.8')
        .to('#reservation .section-title', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .to('#reservation .btn-custom', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.4');

    // Modal animation
    const modal = document.getElementById('staticBackdrop');
    if (modal) {
        const modalInstance = new bootstrap.Modal(modal);
        const modalContent = modal.querySelector('.modal-content');
        const formInputs = modal.querySelectorAll('input, select, textarea');

        // Initial state for modal
        gsap.set(modalContent, {
            y: 50,
            opacity: 0
        });

        // Show modal animation
        modal.addEventListener('show.bs.modal', function () {
            gsap.to(modalContent, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.2)'
            });

            // Animate form inputs
            gsap.from(formInputs, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,

            });
        });

        // Hide modal animation
        modal.addEventListener('hide.bs.modal', function () {
            gsap.to(modalContent, {
                y: 50,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in'
            });
        });

        // Form input focus effect
        formInputs.forEach(input => {
            input.addEventListener('focus', function () {
                gsap.to(this, {
                    scale: 1.02,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            input.addEventListener('blur', function () {
                gsap.to(this, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3,
                    ease: 'power2.inOut'
                });
            });
        });
    }

    // Button hover effect
    const reserveBtn = bookingSection.querySelector('.btn-custom');
    if (reserveBtn) {
        reserveBtn.addEventListener('mouseenter', () => {
            gsap.to(reserveBtn, {
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        reserveBtn.addEventListener('mouseleave', () => {
            gsap.to(reserveBtn, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });
        });

        // Button click effect
        reserveBtn.addEventListener('mousedown', () => {
            gsap.to(reserveBtn, {
                scale: 0.95,
                duration: 0.2,
                ease: 'power2.in'
            });
        });

        reserveBtn.addEventListener('mouseup', () => {
            gsap.to(reserveBtn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    }
}

// Beverages Section Animation
const beveragesSection = document.querySelector('.item-section');
if (beveragesSection) {
    // Initial hide states
    gsap.set('.item-section h1', { y: 30, opacity: 0 });
    gsap.set('.item-section .input-group', { y: 20, opacity: 0 });
    gsap.set('.item-section .d-flex.flex-wrap', { y: 20, opacity: 0 });
    gsap.set('.item-section .item-card', { y: 40, opacity: 0, scale: 0.95 });
    gsap.set('.pagination', { y: 20, opacity: 0 });

    // Create timeline for section animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.item-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true
        },
        defaults: { ease: 'power2.out' }
    });

    // Animate elements in sequence
    tl.to('.item-section h1', {
        y: 0,
        opacity: 1,
        duration: 0.6
    })
        .to('.item-section .input-group', {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, '-=0.4')
        .to('.item-section .d-flex.flex-wrap', {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, '-=0.4')
        .to('.item-section .item-card', {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'back.out(1.4)'
        }, '-=0.2')
        .to('.pagination', {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, '-=0.4');

    // Hover animations for cards
    document.querySelectorAll('.item-card').forEach(card => {
        // Initial state
        gsap.set(card, { willChange: 'transform, box-shadow' });

        // Hover effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animation for filter buttons
    const filterButtons = document.querySelectorAll('.btn-outline');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut'
            });
        });
    });
}

// Cart Page Animations
const cartPage = document.querySelector('.cart-process-section');
if (cartPage) {
    // Initial hide states
    gsap.set('.cart-process-section .d-flex > div', { y: 20, opacity: 0 });
    gsap.set('.cart-table tbody tr', { x: -30, opacity: 0 });
    gsap.set('.table-order-summary', { y: 30, opacity: 0 });

    // Create master timeline
    const cartTl = gsap.timeline({
        defaults: { ease: 'power2.out', duration: 0.6 },
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            toggleActions: 'play none none none',
            once: true
        }
    });

    // Hero section animation
    cartTl

        // Process steps animation
        .to('.cart-process-section .d-flex > div', {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.5
        }, '+=0.2')

        // Cart items animation
        .to('.cart-table tbody tr', {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5
        }, '-=0.3')

        // Cart total section
        .to('.table-order-summary', {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, '-=0.2');

    // Hover animations for cart items
    document.querySelectorAll('.order-item-row').forEach(row => {
        // Initial state
        gsap.set(row, { willChange: 'background-color' });

        // Hover effect
        row.addEventListener('mouseenter', () => {
            gsap.to(row, {
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                duration: 0.2
            });
        });

        row.addEventListener('mouseleave', () => {
            gsap.to(row, {
                backgroundColor: 'transparent',
                duration: 0.2
            });
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.02,
                duration: 0.2
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2
            });
        });

        // Click effect
        btn.addEventListener('mousedown', () => {
            gsap.to(btn, {
                scale: 0.97,
                duration: 0.1
            });
        });

        btn.addEventListener('mouseup', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.1
            });
        });
    });

    // Remove button animation
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const row = this.closest('tr');
            gsap.to(row, {
                x: '100%',
                opacity: 0,
                duration: 0.4,
                onComplete: () => {
                    // This will be handled by your existing remove functionality
                    // row.remove();
                }
            });
        });
    });
}

// Contact Page Animations
const contactPage = document.querySelector('.contact-wrapper');
if (contactPage) {
    // Initial hide states
    gsap.set('.contact-form h1', { y: 30, opacity: 0 });
    gsap.set('.contact-form p', { y: 20, opacity: 0 });
    gsap.set('.contact-form .form-control', { y: 20, opacity: 0 });
    gsap.set('.contact-form button', { y: 20, opacity: 0 });
    gsap.set('.contact-img', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' });
    gsap.set('.clippath', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' });
    gsap.set('.map-responsive iframe', { scale: 0.9, opacity: 0 });
    gsap.set('.section-bg-dark .text-center', { y: 30, opacity: 0 });
    gsap.set('.section-bg-dark .col-6', { y: 30, opacity: 0 });

    // Create master timeline
    const contactTl = gsap.timeline({
        defaults: { ease: 'power2.out', duration: 0.6 },
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true
        }
    });

    // Contact form section animations
    contactTl
        // Title and subtitle
        .to('.contact-form h1', { y: 0, opacity: 1 })
        .to('.contact-form p', { y: 0, opacity: 1 }, '-=0.3')

        // Form inputs stagger
        .to('.contact-form .form-control', {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5
        }, '-=0.2')

        // Submit button
        .to('.contact-form button', {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, '-=0.3')

        // Contact image reveal
        .to('.clippath', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            duration: 1.2,
            ease: 'power3.inOut'
        }, '-=0.6')
        .to('.contact-img', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            duration: 1.2,
            ease: 'power3.inOut'
        }, '-=1.0');

    // Map and contact info section
    const mapSection = document.querySelector('.section-bg-dark');
    if (mapSection) {
        gsap.to('.map-responsive iframe', {
            scrollTrigger: {
                trigger: '.section-bg-dark',
                start: 'top 70%',
                toggleActions: 'play none none none',
                once: true
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.4)'
        });

        gsap.to('.section-bg-dark .text-center', {
            scrollTrigger: {
                trigger: '.section-bg-dark',
                start: 'top 70%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.8
        });

        gsap.to('.section-bg-dark .col-6', {
            scrollTrigger: {
                trigger: '.section-bg-dark',
                start: 'top 60%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
            ease: 'back.out(1.2)'
        });
    }

    // Form input focus effects
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        // Initial state
        gsap.set(input, { willChange: 'transform, box-shadow' });

        // Focus effect
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                duration: 0.3
            });
        });

        // Blur effect
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });

    // Contact info cards hover effect
    const infoCards = document.querySelectorAll('.section-bg-dark .col-6');
    infoCards.forEach(card => {
        // Initial state
        gsap.set(card, { willChange: 'transform' });

        // Hover effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                duration: 0.3
            });
        });
    });
}

// Delivery Info Page Animations
const deliveryInfoPage = document.querySelector('.deliveryinfo-process-section');
if (deliveryInfoPage) {
    // Initial hide states
    gsap.set('.deliveryinfo-process-section .process-line', { scaleX: 0, transformOrigin: 'left center' });
    gsap.set('.deliveryinfo-process-section .text-center', { y: 20, opacity: 0 });
    gsap.set('.info-form h2', { y: 20, opacity: 0 });
    gsap.set('.info-form .form-control, .info-form .form-select, .info-form textarea', { y: 20, opacity: 0 });
    gsap.set('.table-order-summary, .title', { y: 20, opacity: 0 });
    gsap.set('.btn-primary', { y: 20, opacity: 0 });
    gsap.set('.newsletter h5', { y: 30, opacity: 0 });
    gsap.set('.newsletter h1', { y: 40, opacity: 0 });
    gsap.set('.newsletter p', { y: 30, opacity: 0 });
    gsap.set('.newsletter form', { y: 30, opacity: 0 });

    // Create master timeline
    const deliveryTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
            trigger: 'body',
            start: 'top 60%',
            toggleActions: 'play none none none',
            once: true
        }
    });

    // Checkout process animation
    deliveryTl
        // Process steps
        .to('.deliveryinfo-process-section .text-center', {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1
        })
        .to('.deliveryinfo-process-section .process-line', {
            scaleX: 1,
            duration: 0.4,
            ease: 'power2.inOut'
        }, '-=0.3')

        // Current step highlight
        .to('.deliveryinfo-process-section .border-success-subtle', {
            scale: 1.1,
            boxShadow: '0 0 0 8px rgba(25, 135, 84, 0.2)',
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        }, '-=0.3')

        // Back to cart link and form title together
        .to(['.info-form h2'], {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.4
        })

        // Form inputs
        .to('.info-form .form-control, .info-form .form-select, .info-form textarea', {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'back.out(1.4)'
        }, '-=0.2')

        // Cart total section - animate together
        .to(['.title', '.table-order-summary'], {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1
        }, '-=0.3')

        // Payment button
        .to('.btn-primary', {
            y: 0,
            opacity: 1,
            duration: 0.4
        }, '-=0.2');

    // Newsletter section animation (unchanged)
    const newsletterSection = document.querySelector('.newsletter');
    if (newsletterSection) {
        gsap.to('.newsletter h5', {
            scrollTrigger: {
                trigger: '.newsletter',
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.6
        });

        gsap.to('.newsletter h1', {
            scrollTrigger: {
                trigger: '.newsletter',
                start: 'top 75%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.to('.newsletter p', {
            scrollTrigger: {
                trigger: '.newsletter',
                start: 'top 70%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.6
        });

        gsap.to('.newsletter form', {
            scrollTrigger: {
                trigger: '.newsletter',
                start: 'top 65%',
                toggleActions: 'play none none none',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.6
        });
    }

    // Form input focus effects
    const inputs = document.querySelectorAll('.form-control, .form-select, textarea');
    inputs.forEach(input => {
        // Initial state
        gsap.set(input, { willChange: 'transform, box-shadow' });

        // Focus effect
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                duration: 0.3
            });
        });

        // Blur effect
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });

    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                y: -2,
                boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
                duration: 0.2
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                y: 0,
                boxShadow: 'none',
                duration: 0.2
            });
        });

        // Click effect
        btn.addEventListener('mousedown', () => {
            gsap.to(btn, {
                scale: 0.97,
                duration: 0.1
            });
        });

        btn.addEventListener('mouseup', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.1
            });
        });
    });
}

