document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__item');
  const tabsContent = document.querySelectorAll('.work__list');

  if (tabs.length === tabsContent.length) {
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tabsContent.forEach((t) => t.classList.remove('active'));

        tab.classList.add('active');
        tabsContent[index].classList.add('active');
      });
    });
  }
});
