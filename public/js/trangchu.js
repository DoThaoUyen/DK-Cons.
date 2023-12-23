var l_height = 0;
var target = '';
window.onload = function(){
    l_height = document.body.scrollHeight;
    parent.postMessage(l_height + 10,'*');
    console.log(document.body.innerText );
}
window.onresize =  function() {
    l_height = document.body.scrollHeight;
    l_width = document.body.scrollWidth;
    parent.postMessage(l_height + 10 ,'*');

}

const _btnTuVan = document.querySelector('.btnTuVan');
_btnTuVan.addEventListener('click', function(event){
    target = event.target.classList.value;
    parent.postMessage(target,'*');
    window.onload();
});
//ẩn hiện nội dung
let slide_Dis_Hid = 0;
const _txt_desc = document.querySelector('.txt-desc'); 
const _btnND = document.querySelector('.btnXemThem');
_txt_desc.style.display = "none";
_btnND.addEventListener('click', function(){
    if(slide_Dis_Hid == 0){
        slide_Dis_Hid = 1;
        _txt_desc.style.display = "block";
        _txt_desc.style.paddingBottom  = "20px";
        _btnND.textContent = "Ẩn";

    }
    else{
        slide_Dis_Hid = 0;
        _txt_desc.style.display = "none";
        _txt_desc.style.paddingBottom = "0px";
        _btnND.textContent = "Xem thêm";
    }
});
//ẩn hiện hình dot 2
let _check_index_2 = 0;
showSlides_Content_2(_check_index_2);
const Clk_Dot_2 = document.querySelectorAll('.slide-dot-2');
Clk_Dot_2.forEach(element => {
    element.addEventListener('click', function(){
        for (i = 0; i < Clk_Dot_2.length; i++) {
            Clk_Dot_2[i].classList.remove('active');
        }
        element.classList.add('active'); 
        showSlides_Content_2(element.id);
    })
});
function showSlides_Content_2(n) {

    let i;
    let _number_from = Number(n*3); 
    let _number_to = 3 + Number(n*3); 
    let slides_content_2 = document.querySelectorAll(".content-2-pic");
    console.log(_number_from);
    console.log(_number_to);
    for (i = 0; i < slides_content_2.length; i++) {
        slides_content_2[i].style.display = "none";  //ẩn
    }
    for (i = _number_from; i < _number_to; i++) {
        slides_content_2[i].style.display = "block";  //hiện
    }
}
//ẩn hiện hình dot 3
let _check_index_3 = 0;
showSlides_Content_3(_check_index_3);
const Clk_Dot_3 = document.querySelectorAll('.slide-dot-3');
Clk_Dot_3.forEach(element => {
    element.addEventListener('click', function(){
        for (i = 0; i < Clk_Dot_3.length; i++) {
            Clk_Dot_3[i].classList.remove('active');
        }
        element.classList.add('active'); 
        showSlides_Content_3(element.id);
    })
});
function showSlides_Content_3(n) {

    let i;
    let _number_from = Number(n*3); 
    let _number_to = 3 + Number(n*3); 
    let slides_content_3 = document.querySelectorAll(".content-3-pic");
    // console.log(_number_from);
    // console.log(_number_to);
    for (i = 0; i < slides_content_3.length; i++) {
        slides_content_3[i].style.display = "none";  //ẩn
    }
    for (i = _number_from; i < _number_to; i++) {
        slides_content_3[i].style.display = "block";  //hiện
    }
}
