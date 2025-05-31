// Scroll the gallery
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 320; 

    if (direction === 'left') {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
// login
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");
window.addEventListener("load",function(){
    this.setTimeout(function(){
        loginPopup.classList.add("show");
    },3000)
})
close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
})


