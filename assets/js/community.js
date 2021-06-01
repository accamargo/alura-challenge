const projectSession = document.querySelector('.projects')

function loadProjects() {
    if (localStorage == 0) return
    let projects = []
    
    for(let i = 0; i < localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(i)))
    }
    console.log(projects)

    projects.forEach(project => {
        projectSession.innerHTML += createCard(project)
        //in case of html the code would be interpreted, to prevent this behavior it was added here
        const addCode = projectSession.querySelector(`[data-id="${project.id}"]`)
        addCode.querySelector('code').innerText = project.projectDetails.code
    })
}

loadProjects()
hljs.highlightAll();

function createCard(project) {
    let projectCard = `
    <div class="project__card" data-id="${project.id}">
        <div class="project__background" style="background-color: ${project.projectDetails.color}">
            <div class="project__field">
                <ul class="project__idle-buttons">
                    <li class="project__idle-button idle-button--red"></li>
                    <li class="project__idle-button idle-button--yellow"></li>
                    <li class="project__idle-button idle-button--green"></li>
                </ul>
                <pre><code class="project__snippet hljs ${project.projectDetails.language}">
                </code></pre>
            </div>
        </div>
        <div class="project__info">
            <h4 class="project__title">${project.projectDetails.name}</h4>
            <p class="project__description">${project.projectDetails.description}</p>
        </div>
        <div class="project__social">
            <div class="project__social--iconGroup" style="display: flex">
                <div tabindex="0" class="project__comments">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.25C4.47656 0.25 0 3.88672 0 8.375C0 10.3125 0.835938 12.0859 2.22656 13.4805C1.73828 15.4492 0.105469 17.2031 0.0859375 17.2227C0 17.3125 -0.0234375 17.4453 0.0273438 17.5625C0.078125 17.6797 0.1875 17.75 0.3125 17.75C2.90234 17.75 4.84375 16.5078 5.80469 15.7422C7.08203 16.2227 8.5 16.5 10 16.5C15.5234 16.5 20 12.8633 20 8.375C20 3.88672 15.5234 0.25 10 0.25Z" fill="white"/>
                    </svg>
                    <span class="project__comments-number">9</span>
                </div>
                <div tabindex="0" class="project__like">
                    <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"/>
                    </svg>
                    <span class="project__likes-number">9</span>
                </div>
            </div>
            <div class="project__author author">
                <img class="author__avatar" src="./assets/img/photo.png" alt="Avatar do autor">
                <span class="author__name">@Harry</p>
            </div>
        </div>
    </div>
    `
    return projectCard
}