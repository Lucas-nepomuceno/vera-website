//Replace Text in Header
const text = document.querySelector('.replace-me')

if(text != null) {
    const replace = new ReplaceMe(text, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true,
    })
}

function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
            navbar.classList.add('border-secondary');
            navbar.classList.add('border-bottom');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('border-bottom');
            navbar.classList.remove('border-secondary');
            navbar.classList.remove('navbar-sticky');
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll())

//Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#video-modal');
const video = document.querySelector('#video');
let videoSrc;

if(videoBtn != null) {
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.getAttribute('data-bs-src');
    });
}

if(videoModal != null) {
    videoModal.addEventListener('shown.bs.modal', () => {
        video.src = videoSrc + '?autoplay=1;modestbranding=1;showInfo=0';
    });
    videoModal.addEventListener('hide.bs.modal', () => {
        video.src = videoSrc
    })
} 