const btnMenu = document.querySelector('.icon-menu')
const menu = document.getElementById('mainMenu')
const btnClosed = document.querySelector('.icon-menu-closed')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('showMenu')
    changeBtn()
})

const changeBtn = () => {
    btnMenu.classList.toggle('none')
    btnClosed.classList.toggle('block')
}

btnClosed.addEventListener('click', () => {
    menu.classList.toggle('showMenu')
    changeBtn()
})