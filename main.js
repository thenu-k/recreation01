const menuButton = document.querySelector('#menuButton')

//menubutton animation
menuButton.addEventListener('click', () => {
    const box1 = menuButton.querySelector('.box.one')
    const box2 = menuButton.querySelector('.box.two')
    const box3 = menuButton.querySelector('.box.three')
    const box4 = menuButton.querySelector('.box.four')
    const menu = document.querySelector('.menu')
    menu.classList.toggle('on')
    box1.classList.toggle('on')
    box2.classList.toggle('on')
    box3.classList.toggle('on')
    box4.classList.toggle('on')
})