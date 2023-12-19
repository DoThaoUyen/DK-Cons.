const _l_sp_1 = document.getElementById('san-pham-1');
const _l_sp_2 = document.getElementById('san-pham-2');
let l_check = 0;
var l_height = 0;
window.addEventListener('message', function(e){
    // console.log(e);
    if(e.data == 'san-pham-1'){
        l_check = 0;
    }
    else{
        l_check =1;
    }
    load_content(l_check);
})
function load_content(l_check) {
    if(l_check == 0){
        _l_sp_1.style.display = 'block';
        _l_sp_2.style.display = 'none';
    }
    else{
        _l_sp_1.style.display = 'none';
        _l_sp_2.style.display = 'block';
    }
    l_height = document.body.scrollHeight;
    parent.postMessage(l_height + 10,'*');
}
window.onresize =  function() {
    l_height = document.body.scrollHeight;
    parent.postMessage(l_height + 10 ,'*');
}