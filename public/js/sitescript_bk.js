// menu
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
let navbar_menu = document.getElementById("navbar-menu");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    let l_test = document.documentElement.scrollTop;
    navbar_menu.style.top = "0";
    navbar_menu.style.background = '#3f271e';
  } else {
    navbar_menu.style.top = "50px";
    navbar_menu.style.background = 'rgba(0, 0, 0, .8)';
  }
}
//****************************/
let _top = 280;
const slide_banner_text = document.querySelector('.col-md-7');
    let pos_banner = setInterval(function(){
        let pos_banner_2 = setTimeout(function(){
            if(_top == 280){
                slide_banner_text.style.top = _top + "px";
                _top = 250;
            }
            else{
                slide_banner_text.style.top = _top + "px";
                _top = 280;
            }
        },500)
},5000)
//*******slide header*********/ 
let slideIndex_Header = 1;
//showSlidesHeader(slideIndex_Header);
// Next/previous controls
const btn_prev = document.querySelector('.prev');
const btn_next = document.querySelector('.next');

btn_prev.addEventListener('click', function(){
    showSlidesHeader(
        slideIndex_Header += -1
    );
});
btn_next.addEventListener('click', function(){
    showSlidesHeader(
        slideIndex_Header += 1
    );
});

function showSlidesHeader(n) {
    let i;
    let slides_header = document.querySelectorAll(".Slides_BG");
    if (n > slides_header.length) {
        slideIndex_Header = 1
    }
    if (n < 1) {
        slideIndex_Header = slides_header.length
    }
    for (i = 0; i < slides_header.length; i++) {
        slides_header[i].style.display = "none";
    }
    slides_header[slideIndex_Header - 1].style.display = "block";
}
let showSlidesHeader_Auto = setTimeout(
    function showSlidesHeader_Auto() {
        let i;
        let slides = document.querySelectorAll(".Slides_BG");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex_Header++;
        if (slideIndex_Header > slides.length) { slideIndex_Header = 1 }
        slides[slideIndex_Header - 1].style.display = "block";
        setTimeout(showSlidesHeader_Auto, 5000); // Change image every 5 seconds
    },50) 
//*******slide header end******* */ 
//******* content- 1 ******* */ 
let slideIndex_content_1 = 1;
let slideBox_Img = setTimeout (function showBox_Img() {
    let i;
    let slides_cnt_1 = document.getElementsByClassName("slide-content-1");
    //console.log(slides_cnt_1.length);
    for (i = 0; i < slides_cnt_1.length; i++) {
        slides_cnt_1[i].style.display = "block";
    }
    slideIndex_content_1++;
    if (slideIndex_content_1 > slides_cnt_1.length) 
    { 
        slideIndex_content_1 = 1 
    }
    slides_cnt_1[slideIndex_content_1 - 1].style.display = "none";
    setTimeout(showBox_Img, 1000); // Change image 
}, 1000);
//******* content- 1 end ******* */ 
//******* content- 6 ******* */ 
showSlides_Content_6(0);
const Clk_Dot_6 = document.querySelectorAll('.slide-dot-6');
Clk_Dot_6.forEach(element => {
    element.addEventListener('click', function(){
        for (i = 0; i < Clk_Dot_6.length; i++) {
            Clk_Dot_6[i].classList.remove('active');
        }
        element.classList.add('active');
        showSlides_Content_6(element.id);
    })
});
function showSlides_Content_6(n) {
    let i;
    let _number_from = n; 
    let _number_to = 3 + Number(n); 
    let slides_content_6 = document.querySelectorAll(".slide-content-6");
    console.log(slides_content_6);
    for (i = 0; i < slides_content_6.length; i++) {
        slides_content_6[i].style.display = "none";  //ẩn
    }
    for (i = _number_from; i <= _number_to; i++) {
        slides_content_6[i].style.display = "block";  //hiện
    }
}
//******* content-6 end ******* */ 

//******* content- 7 ******* */ 
let _check_index_7 = 0;
showSlides_Content_7(_check_index_7);
const Clk_Dot_7 = document.querySelectorAll('.slide-dot-7');
Clk_Dot_7.forEach(element => {
    element.addEventListener('click', function(){
        for (i = 0; i < Clk_Dot_7.length; i++) {
            Clk_Dot_7[i].classList.remove('active');
        }
        element.classList.add('active');
        if(_check_index_7 == 0){
            showSlides_Content_7(_check_index_7);
            _check_index_7 = 1;
        }
        else{
            showSlides_Content_7(_check_index_7);
            _check_index_7 = 0;
        }
    })
});
function showSlides_Content_7(n) {
    let i;
    let _number_from = n; 
    let _number_to = 3 + Number(n); 
    let slides_content_7 = document.querySelectorAll(".slide-content-7");
    console.log(slides_content_7);
    for (i = 0; i < slides_content_7.length; i++) {
        slides_content_7[i].style.display = "none";  //ẩn
    }
    for (i = _number_from; i < _number_to; i++) {
        slides_content_7[i].style.display = "block";  //hiện
    }
}
//******* content-7 end ******* */ 