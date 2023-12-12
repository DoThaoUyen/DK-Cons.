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