/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

let isInViewport = function(el) {
    let bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

 /**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {
    for (let section of sections) {
        const li = document.createElement('li');
        li.classList.add('menu__link'); // creates a <li> with the .menu__link class
        const anchor = document.createElement('a');
        anchor.setAttribute("href", `#${section.id}`);
        anchor.textContent = section.id; //creates <a> named as & linked to the id of the section
        navList.appendChild(li);
        li.appendChild(anchor);
    }
};


// Add class 'active' to section when near top of viewport

function isActive() {
    for (let section of sections) {
        window.addEventListener('scroll', function(event) {
            if (isInViewport(section)) {
                section.classList.add('your-active-class');
            } else {
                section.classList.remove('your-active-class');
            }
        })
    }
};




/** Scroll to anchor ID using scrollTO event
function scroll() {
    const anchors = document.querySelectorAll('a');
    for (let i = 0; i <= sections.length; i++) {
        const top = sections[i].getBoundingClientRect().top + window.pageYOffset;
        anchors[i].addEventListener('click', function(el) {
            el.preventDefault();
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        });
    }
};
*/


//simplier way
const html = document.querySelector('html');
html.setAttribute('style', 'scroll-behavior: smooth');

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
scroll();
// Set sections as active
isActive();

