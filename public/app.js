/* ---- MENU SHOW  */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }

}
showMenu('nav-toggle', 'nav-menu')

/* ---- REMOVE MENU MOBILE ----*/
const navLink = document.querySelector('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ---- SCROLL SECTION ACTIVE LINK  ----*/
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYoffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').sectionList.add('active')
        } else {
            document.querySelecto('.nav_menu a[href*=' + sectionId + ']').sectionList.remove('active')
        }
    })
}

/* ---- SCROLL TO reveal ---- */

const sr = scrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* ---- HOME ---- */
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', { delay: 200 })
sr.reveal('.home_img', { origin: 'right', delay: 400 })




/* ---- ABOUT ---- */

sr.reveal('.about_img', { delay: 500 })
sr.reveal('.about_subtitle', { delay: 300 })
sr.reveal('.about_profession', { delay: 400 })
sr.reveal('.about_text', { delay: 500 })
sr.reveal('.about_social-icon', { delay: 600, interval: 200 })