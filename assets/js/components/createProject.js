const projectName = document.querySelector(['[data-form="name"]'])
const projectCode = document.querySelector('[data-editor="codeInput"]')
const projectDescription = document.querySelector(['[data-form="description"]'])
const projectLanguage = document.querySelector(['[data-form="language"]'])
const projectColor = document.querySelector('[data-form="color"]')
const nameError = document.querySelector('[data-error="name"]')
const dialog = document.querySelector('[data-dialog="dialog"]')

export function handleNewProject() {
    let name = projectName.value
    if(!valid(name)){
        nameError.classList.remove('displayNone')
        projectName.focus()
        return
    } 
    const project = {
        'id': assignID(), 
        'projectDetails': {
            'name': name,
            'description': projectDescription.value,
            'language': projectLanguage.value, 
            'color': projectColor.value,
            'code': projectCode.innerText
        }
    }
    saveProject(project)
    redirect()
}

function valid (name) {
    const checkName = new RegExp('.*[^ ].*')
    return (checkName.test(name)) ? true : false
}

projectName.addEventListener('change', ()=> {
    nameError.classList.add('displayNone')
})

function assignID () {
    return localStorage.length
}

function saveProject(project) {
    localStorage.setItem(project.id, JSON.stringify(project))   
}

function redirect() {
    dialog.classList.add('dialog--open')
    setTimeout(()=> {
        if(dialog.classList.contains('dialog--open')){
            dialog.classList.remove('dialog--open')
            window.location.href = "./comunidade.html"
        }
    }, 7000)
}