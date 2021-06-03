const projectCode = document.querySelector('[data-editor="codeInput"]')
const projectName = document.querySelector(['[data-form="name"]'])
const projectDescription = document.querySelector(['[data-form="description"]'])
const projectLanguage = document.querySelector(['[data-form="language"]'])
const projectColor = document.querySelector('[data-form="color"]')

export function handleNewProject() {
    const project = {
        'id': assignID(), 
        'projectDetails': {
            'name': projectName.value,
            'description': projectDescription.value,
            'language': projectLanguage.value, 
            'color': projectColor.value,
            'code': projectCode.innerText
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