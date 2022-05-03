document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.documentElement;

    let burger = document.querySelector(".burger");
    let header = document.querySelector('.header');
    // let burgerActive = document.querySelector(".clicked");
    let startScreen = document.querySelector('.js-main');
    let headerFixed = startScreen.offsetHeight;
    let bodyDontScroll = document.body;

    window.onscroll = function () {
        fixed();
    }

    function fixed() {
        //&& window.pageYOffset >= headerFixed
        if (window.scrollY > 0) {
            header.classList.add("header__fixed");
        } else {
            header.classList.remove("header__fixed");
        }
    }


    burger.addEventListener("click", () => {
        burger.classList.toggle("clicked")
        header.classList.toggle("header--open");
        rootElement.classList.toggle('block');
    })

    const video = document.querySelector("video");
    if (video) {
        video.play();
    }
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    console.log(isIOS)

    if (isIOS) {

        const canvasVideo = new CanvasVideoPlayer({
            videoSelector: 'video',
            canvasSelector: '.canvas',
            timelineSelector: false,
            autoplay: true,
            makeLoop: true,
            pauseOnClick: false,
            audio: false
        });

    }else {

        // Use HTML5 video
        document.querySelectorAll('.canvas')[0].style.display = 'none';

    }

    console.log("DOM fully loaded and parsed");
})