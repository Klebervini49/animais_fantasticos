const classAtivo = 'active'

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(classAtivo);
        tabMenu.forEach((e, index) => {
            e.addEventListener('click', () => {
                tabContent.forEach((e) => {
                    e.classList.remove(classAtivo);
                });
                tabContent[index].classList.add(classAtivo);
            });
        });
    };
};

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if (accordionList.length) {
        accordionList[0].classList.add(classAtivo);
        accordionList[0].nextElementSibling.classList.add(classAtivo);

        accordionList.forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.classList.toggle(classAtivo);
                e.target.nextElementSibling.classList.toggle(classAtivo);
            });
        });
    };
};

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

linksInternos.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = e.target.getAttribute('href');
        const section = document.querySelector(href);
        const topSection = section.offsetTop;
        console.log(top)

        window.scrollTo({
            top: topSection,
            behavior: 'smooth'
        });
    });
});

initTabNav();
initAccordion();