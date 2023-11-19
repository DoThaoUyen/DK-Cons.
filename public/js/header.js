//header-1
const _h_header = document.getElementById('header_menu');
const nav_link = document.querySelectorAll('.nav-item');
nav_link.forEach(element => {
    element.addEventListener('click', function(){ 
        // const tel = document.querySelector('.dropdown-menu');
        const l_count = element.querySelectorAll(".dropdown-menu");
        console.log(l_count.length);
        if(l_count.length>0){

        }
    })
});
//const txt_sr = document.getElementById('#search');
const txt_sr = document.querySelector('.text-sr');
const btn_sr = document.querySelector('.btn-sr');


//console.log(txt_sr);
btn_sr.addEventListener('click', function () {
    ///document.getElementById("search").value = "Favorite Cars";
    txt_sr.value =  txt_sr.value;//"Favorite Cars";//txt_sr.value;
});

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }
// menu
// When the user scrolls down 20px from the top of the document, slide down the navbar
