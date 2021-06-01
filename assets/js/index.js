const editorBackground = document.querySelector('[data-editor="background"]')
const divColorPicker = document.querySelector('[data-color]')
const projectName = document.querySelector(['[data-form="name"]'])
const projectDescription = document.querySelector(['[data-form="description"]'])
const projectLanguage = document.querySelector(['[data-form="language"]'])
const projectColor = document.querySelector('[data-form="color"]')

const saveButton = document.querySelector('[data-btn="save"]')


divColorPicker.addEventListener('click', () => {
    projectColor.click()
})

projectColor.addEventListener('input', () => {
    divColorPicker.style.backgroundColor = projectColor.value;
    editorBackground.style.backgroundColor = projectColor.value;
})



saveButton.addEventListener('click', e => {
    e.preventDefault()
    if (typeof(Storage) !== "undefined") {
        handleNewProject()
    } else {
       throw new Error("O dispositivo não suporta localStorage")
    }
})

//teste
codeEditor = document.querySelector('#codeEditorInput')

function handleNewProject() {
    const project = {
        'id': assignID(), 
        'projectDetails': {
            'name': projectName.value,
            'description': projectDescription.value,
            'language': projectLanguage.value, 
            'color': projectColor.value,
            'code': codeEditor.innerText
        }
    }
    saveProject(project)
}

function assignID () {
    console.log(localStorage.length)
    return localStorage.length
}

function saveProject(project) {
    localStorage.setItem(project.id, JSON.stringify(project))   
}