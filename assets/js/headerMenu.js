const menuButton = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const profile = document.querySelector('.profile')
const header = document.querySelector('.header')
const delay = (ms = 5) => new Promise(res => setTimeout(res, ms));

menuButton.addEventListener('click', (e) => {
    let buttonState = (e.target.style.backgroundImage !== 'url("./assets/img/x.svg")') ? 'on' : 'off'
    showMenu(buttonState)
    changeIcon(e.target)
})

function showMenu(buttonStage){
    if (buttonStage)
        menu.appendChild(profile)
    else (buttonStage)
        header.appendChild(profile)
    menu.classList.toggle('active')
}

async function changeIcon(button){
    console.log(button.style.backgroundImage)
    if(button.style.backgroundImage !== 'url("./assets/img/x.svg")'){
        button.style.backgroundImage = 'none'
        button.classList.add('pressed')
        await delay();
        button.style.backgroundImage = 'url(./assets/img/x.svg)'
    } else {
        button.classList.remove('pressed')
        button.style.backgroundImage = 'none'
        await delay(5);
        button.style.backgroundImage = 'url(./assets/img/menu.svg)'
    }
}