const fileName = document.querySelector('[data-export="name"]')
const fileFormat = document.querySelector('[data-export="format"]')
const editorDownload = document.querySelector('[data-editor="background"]')
const formatError = document.querySelector('[data-error="format"]')
const formatSelect = document.querySelector('[data-export="format"]')

formatSelect.addEventListener('change', () =>{
    formatError.classList.add('displayNone')
})

export function handleDownload() {
    if (!fileFormat.value){
        formatError.classList.remove('displayNone')
        return;
    }
    formatError.classList.add('displayNone')
    let file = (fileName.value || 'aluradev') + '.' + fileFormat.value;
    if(fileFormat.value == 'png'|| fileFormat.value == 'jpeg') 
        imageContent(file)
    else 
        charsetContent(file)

}

function imageContent(file) {
    domtoimage.toPng(editorDownload)
    .then(function (dataUrl) {
        download(dataUrl, file)
    })
    .catch(function (error) {
        console.log('image could not be donwloaded', error)
    })
}

function charsetContent(file) {
    let code = document.querySelector('[data-editor="codeWrapper"]').innerText
    const content = 'data:text/plain;charset=utf-8,' + encodeURIComponent(code)
    download(content, file)
}

function download(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
