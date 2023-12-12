var l_height = 0;
window.onload = function(){
    l_height = document.body.scrollHeight;
    parent.postMessage(l_height + 10,'*');
    console.log(l_height, l_height+10);
}
window.onresize =  function() {
    
    l_height = document.body.scrollHeight;
    parent.postMessage(l_height + 10 ,'*');
    console.log(l_height, l_height+10);
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
// tự động nhảy ảnh
let i = 0;
let slideshowTimout = setTimeout(function slideshow(){
    if(i == thumbnails.length){
        i = 0;
    }
    if(lastSelect){
        lastSelect.classList.remove('active');
    }
    mainPhoto.setAttribute('src', thumbnails[i].getAttribute('src'));
    thumbnails[i].classList.add('active');
    lastSelect = thumbnails[i];
    i++;
    slideshowTimout  = setTimeout(slideshow,3000);

},3000);