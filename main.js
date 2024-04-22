const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon= menuBtn.querySelector("i");
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duraiton: 1000,
};
// header container
ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content h4, .header_content .section_header",{
    ...scrollRevealOption,
    delay: 500
});

ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay: 1000
});

ScrollReveal().reveal(".header_btn",{
    ...scrollRevealOption,
    delay: 1500
});

//about container
ScrollReveal().reveal(".about_image img",{
    ...scrollRevealOption,
    origin:"left",
    });

    ScrollReveal().reveal(".about_content .section_header",{
        ...scrollRevealOption,
        delay: 500,
        });

        ScrollReveal().reveal(".about_content .section_description",{
            ...scrollRevealOption,
            delay: 1000,
            });

            ScrollReveal().reveal(".about_card",{
                ...scrollRevealOption,
                delay:1500,
                interval:500,
            })
            //price_container

            ScrollReveal().reveal(".price_card",{
                ...scrollRevealOption,
            interval:500,
            })


            const swiper = new Swiper(".swiper",{
                loop:true,
                slidesPerView:"auto",
                spacebetween:20,
            });

            
            