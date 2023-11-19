var l_height = 0;
window.onload = function(){
    l_height = document.body.scrollHeight;
    console.log(l_height);
    parent.postMessage(l_height,'*');
}


//active img-main
let lastSelect;
const thumbnails = document.querySelectorAll('.img-thumbnails');
const mainPhoto  = document.querySelector('.img-main');
console.log(thumbnails);
thumbnails.forEach(sel_img => {
    sel_img.addEventListener('click', function(){
        console.log(mainPhoto)
        if(lastSelect){
            lastSelect.classList.remove('active');
        }
        mainPhoto.setAttribute('src', this.getAttribute('src'));
        this.classList.add('active');
        lastSelect = this;
    })
});
