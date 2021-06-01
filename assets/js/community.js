import { loadProjects } from "./components/loadProject.js"
import { addLikeToggle } from "./components/likeToggle.js"

loadProjects()
hljs.highlightAll();

const likes = document.querySelectorAll('.project__like')
likes.forEach(heart => {
    heart.addEventListener('click', addLikeToggle)
});
