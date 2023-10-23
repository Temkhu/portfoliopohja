/*const navbar = document.querySelector('.navbar');
const navbarPosition = navbar.offsetTop;
function handleScroll() {
    const scrollY = window.pageYOffset;
    if (scrollY >= navbarPosition) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}*/

/*function myFunction() {
    var element = document.body;
    var button = document.getElementById("teema");
    element.classList.toggle("tumma");
    if (element.classList.contains("tumma")) {
        button.textContent = "Kirkas";
    } else {
        button.textContent = "Tumma";
    }
}*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const piilo = document.querySelectorAll('.piilo');
piilo.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggle = document.getElementById('teema');
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('tumma');
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('tumma');

        localStorage.setItem('darkMode', body.classList.contains('tumma'));
    });
});