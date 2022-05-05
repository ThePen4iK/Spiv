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
    // let videoH = video.offsetHeight;
    // let videoW = video.offsetWidth;
    // console.log(videoH)
    // console.log(videoW, "---")
    //
    // const canvas = document.querySelector(".canvas");
    // console.log(canvas)
    //
    // let canvasH = canvas.offsetHeight;
    // let canvasW = canvas.offsetWidth;
    // console.log(canvasH)
    // console.log(canvasW)
    // if (video) {
    //     video.play();
    // }
    // const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    // console.log(isIOS)
    //
    // if (isIOS) {
    //
    //     const canvasVideo = new CanvasVideoPlayer({
    //         videoSelector: 'video',
    //         canvasSelector: '.canvas',
    //         timelineSelector: false,
    //         autoplay: true,
    //         makeLoop: true,
    //         pauseOnClick: false,
    //         audio: false
    //     });
    //
    // }else {
    //
    //     // Use HTML5 video
    //     document.querySelectorAll('.canvas')[0].style.display = 'block';
    //
    // }
    videojs('bg-video').Background({
        volume: '0',
        mediaType: 'html5',
        autoPlay: 'false'
    });
    console.log("DOM fully loaded and parsed");
})