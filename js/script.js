const modalOpenBtn = document.querySelector(".hero-btn");
const modalCloseBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

const mobOpenBtn = document.querySelector(".mob-menu-open");
const mobCloseBtn = document.querySelector(".mob-menu-close");
const mobMenu = document.querySelector(".mob-menu");




modalOpenBtn.addEventListener('click', () => {
    overlay.classList.add('is-open');
});
modalCloseBtn.addEventListener('click', () => {
    overlay.classList.remove('is-open');
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('is-open');
    }
});

mobOpenBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
});
mobCloseBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
});

