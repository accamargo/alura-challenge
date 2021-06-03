const editorBackground = document.querySelector('[data-editor="background"]')

export function changeColor (){
    this.parentElement.style.backgroundColor = this.value
    editorBackground.style.backgroundColor = this.value
}