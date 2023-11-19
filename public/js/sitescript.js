//const txt_sr = document.getElementById('#search');
const txt_sr = document.querySelector('.text-sr');
const btn_sr = document.querySelector('.btn-sr');
let l_clk_dr_menu = '';


//console.log(txt_sr);
btn_sr.addEventListener('click', function () {
    ///document.getElementById("search").value = "Favorite Cars";
    txt_sr.value =  txt_sr.value;//"Favorite Cars";//txt_sr.value;
});

//header-1
var cancas = document.querySelector(".canvas-container");
var iFrameID = document.getElementById("idIframe");


function iframeLoaded() {
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
    let navbar_menu = document.getElementById("navbar-menu");
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
//active menu
const _clk_menu_page = document.querySelectorAll('.nav-link');
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
        iframeLoaded();
    })
});

const dropdown_menu = document.querySelector('.dropdown-menu');
    dropdown_menu.addEventListener('click', function(e){
        console.log(e.target.id);
        l_clk_dr_menu = e.target.id;
        window.location.href = window.location.pathname + '#' + l_clk_dr_menu;
        iframeLoaded();
});

let slidesShowTimeout = setTimeout(function slidesShow(){
    
},500)
// menu kích thướt nhỏ
const _clk_menu = document.getElementById('clk_menu');
var v_collapse = document.querySelector(".collapse");
var v_navbar = document.querySelector('.navbar-nav');
var v_header_btn = document.querySelector('.header-1-btn');
_clk_menu.addEventListener('click', function(){
    if (v_collapse.style.display === "block") {
        v_collapse.style.display = "none";
        v_navbar.style.display = "none";
        v_header_btn.style.display = "block";
    } else {
        v_collapse.style.display = "block";
        v_navbar.style.display = "block";
        v_header_btn.style.display = "none";
    }
});
// When the user scrolls down 20px from the top of the document, slide down the navbar
