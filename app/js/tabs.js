let tabsParrent = document.querySelector(".tabs__list");
let tabs = document.querySelectorAll(".tabs__item");
let tabsContent = document.querySelectorAll(".work__list");

function hideTabContent() {
    tabsContent.forEach((item) => {
        item.style.display = "none";
    });

    tabs.forEach((item) => {
        item.classList.remove("tabs__item--active");
    });
}

function showTabContent(i = 0) {
    tabsContent[i].style.display = "flex";
    tabs[i].classList.add("tabs__item--active");
}

hideTabContent();
showTabContent();

tabsParrent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabs__item")) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});