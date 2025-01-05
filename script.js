// information page
let aboutPage = document.querySelector(".about-pg");
let resumePage = document.querySelector(".resume-pg");
let workPage = document.querySelector(".work-pg");
let contactPage = document.querySelector(".contact-pg");

// about on
document.querySelector(".about").addEventListener("click", function () {

    aboutPage.style.opacity = 1;
    resumePage.style.opacity = 0;
    workPage.style.opacity = 0;
    contactPage.style.opacity = 0;

})

// resume on
document.querySelector(".resume").addEventListener("click", function () {

    aboutPage.style.opacity = 0;
    resumePage.style.opacity = 1;
    workPage.style.opacity = 0;
    contactPage.style.opacity = 0;

})

// work on
document.querySelector(".work").addEventListener("click", function () {

    aboutPage.style.opacity = 0;
    resumePage.style.opacity = 0;
    workPage.style.opacity = 1;
    contactPage.style.opacity = 0;

})

// contact
document.querySelector(".contact").addEventListener("click", function () {

    aboutPage.style.opacity = 0;
    resumePage.style.opacity = 0;
    workPage.style.opacity = 0;
    contactPage.style.opacity = 1;

})
