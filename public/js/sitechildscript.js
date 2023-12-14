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
const _clk_zalo = document.getElementById('hs-content-2-1-zalo');
const _clk_fb = document.getElementById('hs-content-2-1-fb');

_clk_fb.addEventListener('click', function(){
    window.open('https://www.facebook.com/profile.php?id=61554538439652', '_blank');
   
});
_clk_zalo.addEventListener('click', function(){
    window.open('https://zalo.me/3850258166399151098', '_blank');
   
});