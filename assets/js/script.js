const editorBackground = document.querySelector('[data-editor="background"]')
const divColorPicker = document.querySelector('[data-color]')

const projectName = document.querySelector(['[data-form="name"]'])
const projectDescription = document.querySelector(['[data-form="description"]'])
const projectLanguage = document.querySelector(['[data-form="language"]'])
const projectColor = document.querySelector('[data-form="color"]')

const saveButton = document.querySelector('[data-btn="save"]')


divColorPicker.addEventListener('click', () => {
    projectColor.click();
})

projectColor.addEventListener('input', () => {
    divColorPicker.style.backgroundColor = projectColor.value;
    editorBackground.style.backgroundColor = projectColor.value;
})


// project form save in localStorage
saveButton.addEventListener('click', (e) => {

})

function createProject() {
    const project = {
        "name": projectName.value
    }
}
// 
const project = {
    "name" : projectName.value,
    "description" : projectDescription.value,
}
