export function addLikeToggle () {
    this.classList.toggle('active')
    const likeNumber = this.querySelector('span')
    if (this.classList.contains('active')) likeNumber.innerText++
    else likeNumber.innerText--
}