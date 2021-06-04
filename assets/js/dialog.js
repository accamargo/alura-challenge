const dialog = document.querySelector('[data-dialog="dialog"]')
const dialogButton = document.querySelector('[data-dialog="button"]')
const dialogOverlay = document.querySelector('[data-dialog="overlay"]')

dialogButton.addEventListener('click', () => {
    dialog.classList.remove('dialog--open')
})

dialogOverlay.addEventListener('click', () => {
    dialog.classList.remove('dialog--open')
})
