const txt_sr = document.querySelector('.text-sr');
const btn_sr = document.querySelector('.btn-sr');
var cancas = document.querySelector(".canvas-container");
var iFrameID = document.getElementById("idIframe");
let navbar_menu = document.getElementById("navbar-menu");
const dropdown_menu = document.querySelector('.dropdown-menu');
const _clk_menu = document.getElementById('clk_menu');
var v_collapse = document.querySelector(".collapse");
var v_navbar = document.querySelector('.navbar-nav');
var v_header_btn = document.querySelector('.header-1-btn');
const _clk_menu_page = document.querySelectorAll('.nav-link');
let ckl_down_up = 0;
let l_clk_dr_menu = '';


//console.log(txt_sr);
btn_sr.addEventListener('click', function () {
    txt_sr.value =  txt_sr.value;
});

//header-1
function iframeLoaded() {
    window.scrollTo(0, 0);
    window.addEventListener('message', function(event){
        iFrameID.height = event.data + "px";
        cancas.style.height = event.data + "px";
    }, 
    false);
    if(l_clk_dr_menu != ''){
        iFrameID.contentWindow.postMessage(l_clk_dr_menu,'*');
    }
}
// menu
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    // console.log(navbar_menu);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar_menu.style.top = "0px";
        navbar_menu.style.position = "fixed";
        navbar_menu.style.background = 'rgba(255, 199, 115, .8)';
    } else {
        navbar_menu.style.top = "0px";
        navbar_menu.removeAttribute("style");
        navbar_menu.style.position = "relative";
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
        sel_menu.classList.add('active'); 
        sel_menu.style.color = 'rgb(210 66 75)';
        window.location.href = window.location.pathname + sel_menu.getAttribute('value');
        if(sel_menu.children.length > 0){
            if(_ck_tab_sp == 0){
                dropdown_menu.style.display = "none";
                _ck_tab_sp = 1;
            }else{
                dropdown_menu.style.display = "block";
                _ck_tab_sp = 0;
            }
        }
        iframeLoaded();
    })
});

dropdown_menu.addEventListener('click', function(e){
    console.log(e.target.id);
    l_clk_dr_menu = e.target.id;
    window.location.href = window.location.pathname + '#' + l_clk_dr_menu;
    iframeLoaded();
    dropdown_menu.style.display = "none";
    _ck_tab_sp = 1;
});

let slidesShowTimeout = setTimeout(function slidesShow(){
    
},500)
// menu kích thướt nhỏ
_clk_menu.addEventListener('click', function(){
    if (v_collapse.style.display === "block") {
        v_collapse.style.display = "none";
        v_navbar.style.display = "none";
        v_header_btn.style.display = "block";
        _clk_menu.children[0].classList.toggle('fa-bars');
    } else {
        v_collapse.style.display = "block";
        v_navbar.style.display = "block";
        v_header_btn.style.display = "none";
        _clk_menu.children[0].classList.toggle('fa-xmark');
    }
   
});
// When the user scrolls down 20px from the top of the document, slide down the navbar
