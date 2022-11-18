const nav = document.getElementById('global-nav')
const headerHeight = document.getElementById('header')


window.addEventListener('scroll', () => {
    const element = document.getElementById('scroll__point').clientHeight;
    const navheight = document.getElementById('global-nav').clientHeight
    const headerWidth = document.getElementById('header').clientWidth
    const scroll = window.scrollY;
    const width = window.innerWidth
    console.log(headerWidth);
    if(width < 735) {
        nav.classList.remove('nav__float__pc')
        nav.classList.remove('fixed__pc')
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
        if(element <= scroll) {
            nav.classList.remove('nav__float__pc')
            nav.classList.add('fixed__pc')
        } else {
            nav.classList.add('nav__float__pc')
            nav.classList.remove('fixed__pc')
        }
    }
    headerHeight.style.marginBottom = navheight + "px"
})

window.addEventListener('resize', () => {
    const element = document.getElementById('scroll__point').clientHeight;
    const navheight = document.getElementById('global-nav').clientHeight
    const scroll = window.scrollY;
    const width = window.screenX
    if(width < 735) {
        nav.classList.remove('nav__float__pc')
        nav.classList.remove('fixed__pc')
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
        if(element <= scroll) {
            nav.classList.remove('nav__float__pc')
            nav.classList.add('fixed__pc')
        } else {
            nav.classList.add('nav__float__pc')
            nav.classList.remove('fixed__pc')
        }
    }
    headerHeight.style.marginBottom = navheight + "px"
})
