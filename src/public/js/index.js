const menuIcon = document.getElementById('menuIcon')
const exitIcon = document.getElementById("exitIcon")

menuIcon.onclick = () => {
    exitIcon.style.display = 'block'
    menuIcon.style.display = 'none'
}

exitIcon.onclick = () => {
    menuIcon.style.display = 'block'
    exitIcon.style.display = 'none'
}