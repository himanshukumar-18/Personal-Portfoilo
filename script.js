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
});


// resume on
document.querySelector(".resume").addEventListener("click", function () {
    resumePage.style.opacity = 1;
    aboutPage.style.opacity = 0;
    workPage.style.opacity = 0;
    contactPage.style.opacity = 0;
});


// work on
document.querySelector(".work").addEventListener("click", function () {
    aboutPage.style.opacity = 0;
    resumePage.style.opacity = 0;
    workPage.style.opacity = 1;
    contactPage.style.opacity = 0;
});


// contact
document.querySelector(".contact").addEventListener("click", function () {
    aboutPage.style.opacity = 0;
    resumePage.style.opacity = 0;
    workPage.style.opacity = 0;
    contactPage.style.opacity = 1;
});

// info btn

let aboutBtn = document.querySelector(".about");
let resumeBtn = document.querySelector(".resume");
let workBtn = document.querySelector(".work");
let contactBtn = document.querySelector(".contact");

aboutBtn.addEventListener("click", function () {
    aboutBtn.style.background = "#ff014f";
    aboutBtn.style.color = "#ffffff";

    contactBtn.style.background = "none";
    contactBtn.style.color = "#3c3e41";

    workBtn.style.background = "none";
    workBtn.style.color = "#3c3e41";

    resumeBtn.style.background = "none";
    resumeBtn.style.color = "#3c3e41";
});


resumeBtn.addEventListener("click", function () {
    resumeBtn.style.backgroundColor = "#ff014f";
    resumeBtn.style.color = "#ffffff";

    aboutBtn.style.background = "none";
    aboutBtn.style.color = "#3c3e41";

    workBtn.style.background = "none";
    workBtn.style.color = "#3c3e41";

    contactBtn.style.background = "none";
    contactBtn.style.color = "#3c3e41";
});


workBtn.addEventListener("click", function () {
    workBtn.style.backgroundColor = "#ff014f";
    workBtn.style.color = "#ffffff";

    resumeBtn.style.background = "none";
    resumeBtn.style.color = "#3c3e41";

    aboutBtn.style.background = "none";
    aboutBtn.style.color = "#3c3e41";

    contactBtn.style.background = "none";
    contactBtn.style.color = "#3c3e41";
});


contactBtn.addEventListener("click", function () {
    contactBtn.style.backgroundColor = "#ff014f";
    contactBtn.style.color = "#ffffff";

    workBtn.style.background = "none";
    workBtn.style.color = "#3c3e41";

    resumeBtn.style.background = "none";
    resumeBtn.style.color = "#3c3e41";

    aboutBtn.style.background = "none";
    aboutBtn.style.color = "#3c3e41";
});
