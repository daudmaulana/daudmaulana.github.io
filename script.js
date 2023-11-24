// Navbar
const contentClick = (value) => {
    const navHeight = document.querySelector('.container nav').offsetHeight;
    const element = document.getElementById(`content${value}`);
    const offsetPosition = element.offsetTop - navHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Scroll
const boxes = document.querySelectorAll('.card-service');
window.addEventListener('scroll', () => {
    const triggerBot = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBot) box.classList.add('show');
    });
});
