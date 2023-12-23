const txt_sr = document.querySelector('.text-sr');
const btn_sr = document.querySelector('.btn-sr');
var cancas = document.querySelector(".canvas-container");
const dropdown_menu = document.querySelector('.dropdown-menu');
var v_collapse = document.querySelector(".collapse");
var v_navbar = document.querySelector('.navbar-nav');
var v_header_btn = document.querySelector('.header-1-btn');
const _clk_menu_page = document.querySelectorAll('.nav-link');
const _style_nav_item = document.querySelectorAll('.nav-item');
var iFrameID = document.getElementById("idIframe");
let navbar_menu = document.getElementById("navbar-menu");
const _clk_menu = document.getElementById('clk_menu');
var l_change_icon = document.getElementById('navbar-toggle');
let ckl_down_up = 0;
let l_clk_dr_menu = '';
var l_target_children = '';

if(_style_nav_item[0].value == "0"){
    _style_nav_item[0].style.borderLeft = "none";
}
btn_sr.addEventListener('click', function () {
    txt_sr.value =  txt_sr.value;
});
//header-1
function iframeLoaded() {
    window.addEventListener('message', function(event){
        iFrameID.height = event.data + "px";
        cancas.style.height = event.data + "px";
        l_target_children =  event.data;
        if(l_target_children == "btnTuVan"){
            _clk_menu_page[7].click();
        }
    }, 
    false);
    if(l_clk_dr_menu != ''){
        iFrameID.contentWindow.postMessage(l_clk_dr_menu,'*');
    }
}
// menu
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {
    scrollFunction();
    iframeLoaded();
};
const  w_change_width = document.querySelector('header#navbar-menu');
const  w_change_location_btn = document.querySelector('.header-1-btn');
const  i_change_location_btn = document.querySelectorAll('.header-1-btn a');
const  w_change_location_search = document.querySelector('.header-1-search');
let l_change_width = 0;
window.onload = function(){
    w_change_width.offsetWidth = w_change_width.clientWidth;
    scrollFunction_Width();
}
window.onresize =  function() {
     scrollFunction_Width();
     iframeLoaded();
}
function scrollFunction_Width(){
    l_change_width = w_change_width.offsetWidth;
    i_change_location_btn[0].style.display =  null;
    i_change_location_btn[1].style.display =  null;
    w_change_location_search.classList.value = 'col-md-4 col-sm-4 col-5 header-1-search text-center'; 
    w_change_location_btn.classList.value = 'col-md-4 col-sm-4 col-3 header-1-btn text-end'; 
    console.log(l_change_width);
    if(l_change_width >= 1730){
    }
    else if(l_change_width < 1730 && l_change_width >= 952){
    }
    else if(l_change_width < 951 && l_change_width >= 768){
        w_change_location_search.classList.value = 'col-md-8 col-sm-8 col-8 header-1-search ms-auto'; 
        w_change_location_btn.classList.value = 'col-md-10 col-sm-10 col-12 header-1-btn ms-auto'; 
        _clk_menu.style.display = 'block';
        l_change_icon.style.display = 'block';

    }
    
    else if(l_change_width < 768 && l_change_width >= 360){
        w_change_location_search.classList.value = 'col-md-4 col-sm-8 col-8 header-1-search text-center'; 
        w_change_location_btn.classList.value = 'col-md-4 col-sm-12 col-12 header-1-btn text-end'; 
        _clk_menu.style.display = 'block';
        l_change_icon.style.display = 'block';
    }
    else if(l_change_width < 359 && l_change_width >= 1){
        w_change_location_search.classList.value = 'col-md-4 col-sm-8 col-8 header-1-search text-center'; 
         i_change_location_btn[0].style.display = "none"; 
         i_change_location_btn[1].style.display = "none";  
         _clk_menu.style.display = "none";      
    }
}
// window.onresize =  function() {//offsetWidth
//      i_change_location_btn[0].style.display =  null;
//      i_change_location_btn[1].style.display =  null;
//     l_change_w = w_change_location_btn.offsetWidth;
//     i_change_location_search.classList.value = 'col-md-4 col-sm-4 col-5'; 
//     console.log(i_change_location_btn[0]);
//     console.log(w_change_location_btn.offsetWidth);
//     if(l_change_w >= 320){
//         i_change_location_btn[0].removeAttribute('style');
//         i_change_location_btn[1].removeAttribute('style');
//     }
//     else if(l_change_w >= 240 && l_change_w < 320)
//     {       
//         i_change_location_btn[0].style.fontSize  = 5 + "px";
//         i_change_location_btn[0].style.padding = 5 + "px";
//         i_change_location_btn[1].style.fontSize  = 5 + "px";
//         i_change_location_btn[1].style.padding = 5 + "px";
//         console.log('1');
//     }
//     else if(l_change_w >= 180 && l_change_w < 240){

//         i_change_location_btn[0].style.fontSize  = 5 + "px";
//         i_change_location_btn[0].style.padding   = 3 + "px";
//         i_change_location_btn[1].style.fontSize  = 5 + "px";
//         i_change_location_btn[1].style.padding   = 3 + "px";
//         console.log('2');
//     }
//     else if(60 < l_change_w <= 180){
//         i_change_location_btn[0].style.display = "none"; 
//         i_change_location_btn[1].style.display = "none"; 
//         i_change_location_search.classList.value = 'col-md-4 col-sm-8 col-8'; 
//     }
//     else{
//         i_change_location_btn[0].removeAttribute('style');
//         i_change_location_btn[1].removeAttribute('style');
//     }
// };

// const  w_change_location_btn = document.querySelector('div#change_location_btn');
// const  i_change_location_btn = document.getElementById('change_location_btn');
// window.onresize =  function() {//offsetWidth
//     console.log(w_change_location_btn);
//     console.log(w_change_location_btn.offsetWidth);
//     if(w_change_location_btn.offsetWidth <= 240)
//     {
//         console.log(i_change_location_btn.getAttributeNode('class'));
//         console.log(i_change_location_btn.attributes[0].value);
//         // i_change_location_btn.classList.value = 'col-md-4 col-sm-12 col-12 text-end';        
//     }
// };

function scrollFunction() {
   // _l_height_menu = navbar_menu.style.height;
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar_menu.style.top = "0px";
        navbar_menu.style.position = "fixed";
        navbar_menu.style.background = 'rgba(255, 199, 115, .8)';
        navbar_menu.style.backgroundAttachment = "local";
    } else {
        // navbar_menu.style.top = "0px";
        navbar_menu.removeAttribute("style");
        navbar_menu.style.position = "relative";
        // navbar_menu.style.height   = 160 + "px";
        navbar_menu.style.backgroundAttachment = "local";
    }
}
//active 
let _ck_tab_sp = 0;
_clk_menu_page.forEach(sel_menu => {
    sel_menu.addEventListener('click', function(){
        for (i = 0; i < _clk_menu_page.length; i++) {
            _clk_menu_page[i].classList.remove('active');
            _clk_menu_page[i].style.color = 'rgb(255 255 255)';
        }
        //location.reload();
        if(sel_menu.children.length > 0){
            if(_ck_tab_sp == 0){
                dropdown_menu.style.display = "none";
                _ck_tab_sp = 1;
            }else{
                dropdown_menu.style.display = "block";
                _ck_tab_sp = 0;
            }
        }
        else{
            sel_menu.classList.add('active'); 
            sel_menu.style.color = 'rgb(210 66 75)';
            window.location.href = window.location.pathname + sel_menu.getAttribute('value');
            iframeLoaded();
            window.scrollTo(0, 0);
        }
    })
});
//hover 
_style_nav_item.forEach(hover_menu => {
    hover_menu.addEventListener('mouseover', function(){
        if(hover_menu.childNodes[1].children.length > 0){
            dropdown_menu.style.display = "block";
        }
    });
    hover_menu.addEventListener('mouseout', function(){
        if(hover_menu.childNodes[1].children.length > 0){
            dropdown_menu.style.display = "none";
        }
    });
});
dropdown_menu.addEventListener('click', function(e){
    for (i = 0; i < _clk_menu_page.length; i++) {
        _clk_menu_page[i].classList.remove('active');
        _clk_menu_page[i].style.color = 'rgb(255 255 255)';
    }
    e.target.parentNode.parentNode.children[0].classList.add('active'); 
    e.target.parentNode.parentNode.children[0].style.color = 'rgb(210 66 75)';
    l_clk_dr_menu = e.target.id;
    window.location.href = window.location.pathname + '#' + l_clk_dr_menu;
    window.scrollTo(0, 0);
    iframeLoaded();
    dropdown_menu.style.display = "none";
    _ck_tab_sp = 1;
});

let slidesShowTimeout = setTimeout(function slidesShow(){
    
},500)
// menu kích thướt nhỏ
_clk_menu.onclick = function(){
    if (v_collapse.style.display === "block") {
        v_collapse.style.display = "none";
        v_navbar.style.display = "none";
        l_change_icon.children[0].classList.toggle('fa-bars');
    } else {
        v_collapse.style.display = "block";
        v_navbar.style.display = "block";
        l_change_icon.children[0].classList.toggle('fa-xmark');
    }
    window.scrollTo(0, 0);
};
// When the user scrolls down 20px from the top of the document, slide down the navbar