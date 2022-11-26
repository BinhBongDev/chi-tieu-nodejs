const menuIcon = document.getElementById('menuIcon')
const exitIcon = document.getElementById("exitIcon")
const navMobile = document.querySelector('.mobile-nav')
// const backdrop = document.querySelector('.backdrop')

const openIcon = () => {
    exitIcon.style.display = 'block'
    navMobile.style.display = 'block'
    // backdrop.style.display = 'block'
    menuIcon.style.display = 'none'
}

const closeIcon = () => {
    menuIcon.style.display = 'block'
    exitIcon.style.display = 'none'
    navMobile.style.display = 'none'
    // backdrop.style.display = 'none'

}

menuIcon.addEventListener('click', openIcon)
exitIcon.addEventListener('click',closeIcon)
// backdrop.addEventListener('click', closeIcon)