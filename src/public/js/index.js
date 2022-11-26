const menuIcon = document.getElementById('menuIcon')
const exitIcon = document.getElementById("exitIcon")
const navMobile = document.querySelector('.mobile-nav')
const backdrop = document.querySelector('.backdrop')

const openIcon = () => {
    exitIcon.style.display = 'block'
    navMobile.classList.add('open')
    backdrop.style.display = 'block'
}

const closeIcon = () => {
    menuIcon.style.display = 'block'
    navMobile.classList.remove('open')
    backdrop.style.display = 'none'

}

menuIcon.addEventListener('click', openIcon)
exitIcon.addEventListener('click',closeIcon)
backdrop.addEventListener('click', closeIcon)