import { handleNewProject } from "./components/createProject.js"
import { addHighlight, changeLanguage } from "./components/codeHighlight.js"
import { changeColor } from "./components/colorPicker.js"
import { handleDownload } from "./components/export.js"

const projectLanguage = document.querySelector(['[data-form="language"]'])
const highlightButton = document.querySelector('[data-btn="highlight"]')
const saveButton = document.querySelector('[data-btn="save"]')
const divColorPicker = document.querySelector('[data-color]')
const inputColorPicker = document.querySelector('[data-form="color"]')
const exportButton = document.querySelector('[data-btn="export"]')

divColorPicker.addEventListener('click', () => {
    inputColorPicker.click()
})

inputColorPicker.addEventListener('input', changeColor)

projectLanguage.addEventListener('change', changeLanguage)

highlightButton.addEventListener('click', addHighlight)

saveButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (typeof(Storage) !== "undefined") {
        handleNewProject()
    } else {
        throw new Error("localStorage is not supported")
    }
})

exportButton.addEventListener('click', handleDownload)