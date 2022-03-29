document.addEventListener("DOMContentLoaded", function () {

    let burger = document.querySelector(".burger");
    let header = document.querySelector('.header');
    // let burgerActive = document.querySelector(".clicked");
    burger.addEventListener("click", ()=>{
        burger.classList.toggle("clicked")
        header.classList.toggle("header--open");
    })


    console.log("DOM fully loaded and parsed");
})