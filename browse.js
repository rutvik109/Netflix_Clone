const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav__black');
    } else {
        nav.classList.remove('nav__black');
    }
});

function home() {
    window.location = "../Home/index.html";
}

function open_modal() {
    document.getElementsByClassName('modal')[0].style.display="flex";
    console.log();
}


function close_modal() {
    document.getElementsByClassName('modal')[0].style.display="none";
}

