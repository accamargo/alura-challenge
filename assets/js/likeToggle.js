const like = document.querySelectorAll('.project__like')

like.forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('active')
    })
});
