(() => {
    const menuButton = document.querySelector('.menu-icon')
    const closeButton = document.querySelector('.x-icon')
    const searchButton = document.querySelector('.search-icon')
    const menu = document.querySelector('.menu')
    const logo = document.querySelector('.logo')
    const searchBox = document.querySelector('.search-box')
    let searchState = 0
    
    menuButton.addEventListener('click', openMenu)
    searchButton.addEventListener('click', openSearch)
    closeButton.addEventListener('click', closeAll)
    
    function openSearch() {
        searchBox.classList.add('active')
        showElement(closeButton)
        removeElement(searchButton, menuButton, logo)
        searchState = 1
    }
    
    function openMenu() {
        menu.classList.add('active')
        removeElement(menuButton)
        showElement(closeButton)
    }
    
    function closeAll (){
        if(searchState === 1){
            searchBox.classList.remove('active')
            showElement(searchButton, logo)
        }
        menu.classList.remove('active')
        showElement(menuButton)
        removeElement(closeButton)
    }
    
    function removeElement(...elements){
        elements.forEach(element => {
           element.classList.add('removeElement') 
        })
    }
    
    function showElement(...elements){
        elements.forEach(element => {
            element.classList.remove('removeElement') 
        })
    }    

})()
