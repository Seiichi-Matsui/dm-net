const nav = document.getElementById('global-nav')
const headerHeight = document.getElementById('header')


window.addEventListener('scroll', () => {
    const element = document.getElementById('scroll__point').clientHeight;
    const navheight = document.getElementById('global-nav').clientHeight
    const scroll = window.scrollY;
    const width = window.innerWidth

    if(width < 735) {
        nav.classList.remove('nav__float__pc')
        nav.classList.remove('fixed__pc')
        headerHeight.style.marginBottom = navheight + "px"
        if(element <= scroll) {
            nav.classList.remove('nav__float__sp')
            nav.classList.add('fixed__sp')
        } else {
            nav.classList.add('nav__float__sp')
            nav.classList.remove('fixed__sp')
        }
    } else {
        nav.classList.remove('nav__float__sp')
        nav.classList.remove('fixed__sp')
        headerHeight.style.marginBottom = "55px"
        if(element <= scroll) {
            nav.classList.remove('nav__float__pc')
            nav.classList.add('fixed__pc')
        } else {
            nav.classList.add('nav__float__pc')
            nav.classList.remove('fixed__pc')
        }
    }
})

window.addEventListener('resize', () => {
    const element = document.getElementById('scroll__point').clientHeight;
    const navheight = document.getElementById('global-nav').clientHeight
    const scroll = window.scrollY;
    const width = window.screenX
    if(width < 735) {
        nav.classList.remove('nav__float__pc')
        nav.classList.remove('fixed__pc')
        headerHeight.style.marginBottom = navheight + "px"
        if(element <= scroll) {
            nav.classList.remove('nav__float__sp')
            nav.classList.add('fixed__sp')
        } else {
            nav.classList.add('nav__float__sp')
            nav.classList.remove('fixed__sp')
        }
    } else {
        nav.classList.remove('nav__float__sp')
        nav.classList.remove('fixed__sp')
        headerHeight.style.marginBottom = "55px"
        if(element <= scroll) {
            nav.classList.remove('nav__float__pc')
            nav.classList.add('fixed__pc')
        } else {
            nav.classList.add('nav__float__pc')
            nav.classList.remove('fixed__pc')
        }
    }
})
