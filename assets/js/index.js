import { handleNewProject } from "./components/createProject.js"
import { addHighlight, changeLanguage } from "./components/codeHighlight.js"
import { changeColor } from "./components/colorPicker.js"

const projectLanguage = document.querySelector(['[data-form="language"]'])
const highlightButton = document.querySelector('[data-btn="highlight"]')
const saveButton = document.querySelector('[data-btn="save"]')
const divColorPicker = document.querySelector('[data-color]')
const inputColorPicker = document.querySelector('[data-form="color"]')


divColorPicker.addEventListener('click', () => {
    inputColorPicker.click()
})

inputColorPicker.addEventListener('input', changeColor)

projectLanguage.addEventListener('change', changeLanguage)

highlightButton.addEventListener('click', addHighlight)

saveButton.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined") {
        handleNewProject()
    } else {
        throw new Error("O dispositivo não suporta localStorage")
    }
})