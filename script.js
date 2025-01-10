// information page
let aboutPage = document.querySelector(".about-pg");
let resumePage = document.querySelector(".resume-pg");
let workPage = document.querySelector(".work-pg");
let contactPage = document.querySelector(".contact-pg");

// about on
document.querySelector(".about").addEventListener("click", function () {
    aboutPage.style.display = "block";
    aboutPage.style.opacity = 1;
    aboutPage.style.zIndex = 1;

    resumePage.style.opacity = 0;
    resumePage.style.display = "none";

    workPage.style.opacity = 0;
    workPage.style.display = "none";

    contactPage.style.opacity = 0;
    contactPage.style.display = "none";
});


// resume on
document.querySelector(".resume").addEventListener("click", function () {
    resumePage.style.opacity = 1;
    resumePage.style.display = "block";
    resumePage.style.zIndex = 1;

    aboutPage.style.opacity = 0;
    aboutPage.style.display = "none";

    workPage.style.opacity = 0;
    workPage.style.display = "none";

    contactPage.style.opacity = 0;
    contactPage.style.display = "none";
});


// work on
document.querySelector(".work").addEventListener("click", function () {
    workPage.style.opacity = 1;
    workPage.style.display = "block";
    workPage.style.zIndex = 1;

    aboutPage.style.opacity = 0;
    aboutPage.style.display = "none";

    resumePage.style.opacity = 0;
    resumePage.style.display = "none";

    contactPage.style.opacity = 0;
    contactPage.style.display = "none";
});


// contact
document.querySelector(".contact").addEventListener("click", function () {
    contactPage.style.opacity = 1;
    contactPage.style.display = "block";
    contactPage.style.zIndex = 1;

    aboutPage.style.opacity = 0;
    aboutPage.style.display = "none";

    resumePage.style.opacity = 0;
    resumePage.style.display = "none";

    workPage.style.opacity = 0;
    workPage.style.display = "none";
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

    links.style.opacity = 0;
    links.style.right = "-120px";
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

    links.style.opacity = 0;
    links.style.right = "-120px";
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

    links.style.opacity = 0;
    links.style.right = "-120px";
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


// contact links

let links = document.querySelector(".contact-links");

contactBtn.addEventListener("click", () => {

    links.style.opacity = 1;
    links.style.right = 0;

})




// skills

let htmlProgress = document.querySelector(".html-progress");
let htmlPoint = document.querySelector(".html-point");

let cssProgress = document.querySelector(".css-progress");
let cssPoint = document.querySelector(".css-point");

let javascriptProgress = document.querySelector(".javascript-progress");
let javascriptPoint = document.querySelector(".javascript-point ");

let bootstrapProgress = document.querySelector(".bootstrap-progress");
let bootstrapPoint = document.querySelector(".bootstrap-point");

let reactProgress = document.querySelector(".react-progress");
let reactPoint = document.querySelector(".react-point");

let queryProgress = document.querySelector(".query-progress");
let queryPoint = document.querySelector(".query-point");

let swiperProgress = document.querySelector(".swiper-progress");
let swiperPoint = document.querySelector(".swiper-point");

let wordProgress = document.querySelector(".wordpress-progress");
let wordPoint = document.querySelector(".wordpress-point");



resumeBtn.addEventListener("click", () => {


    setTimeout(() => {

        htmlProgress.style.width = "100%";
        htmlPoint.style.right = 0;
        htmlPoint.style.opacity = 1;

        cssProgress.style.width = "90%";
        cssPoint.style.left = "82%";
        cssPoint.style.opacity = 1;

        javascriptProgress.style.width = "70%";
        javascriptPoint.style.left = "62%";
        javascriptPoint.style.opacity = 1;

        bootstrapProgress.style.width = "60%";
        bootstrapPoint.style.left = "52%";
        bootstrapPoint.style.opacity = 1;

        reactProgress.style.width = "50%";
        reactPoint.style.left = "42%";
        reactPoint.style.opacity = 1;

        queryProgress.style.width = "70%";
        queryPoint.style.left = "62%";
        queryPoint.style.opacity = 1;

        swiperProgress.style.width = "80%";
        swiperPoint.style.left = "72%";
        swiperPoint.style.opacity = 1;


        wordProgress.style.width = "50%";
        wordPoint.style.left = "42%";
        wordPoint.style.opacity = 1;


    }, 2000);

})




let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "40% 90%",
        end: "200% 90%",
        // markers: true,
        scrub: true,
    }
});

tl.to(".second", {
    x: 450,
}, 'a')
tl.to(".first", {
    x: -450,
}, 'a')
