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

function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            //  Forma alternativa
            // const topSection = section.offsetTop;
            // window.scrollTo({
            //     top: topSection,
            //     behavior: 'smooth'
            // });
        });
    });
};

function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const window65Porcento = window.innerHeight * 0.65;

        function animaScroll() {
            sections.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - window65Porcento) < 0;
                if (isSectionVisible)
                    item.classList.add('ativo');
                else
                    item.classList.remove('ativo');
            });
        };
        window.addEventListener('scroll', animaScroll)
        animaScroll()
    };
};


// Executando as funções
initTabNav();
initAccordion();
initScrollSmooth();
initAnimationScroll();