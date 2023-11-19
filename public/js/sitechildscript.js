var l_height = 0;
window.onload = function(){
    l_height = document.body.scrollHeight;
    console.log(l_height);
    parent.postMessage(l_height,'*');
}