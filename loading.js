var porcent = document.querySelector('.porcent');
var loading = document.querySelector('.loading');
var count = 4;
var load = setInterval(animate, 20);

function animate(){
    if(count == 100){
        loading.parentElement.removeChild(loading);
        count
    }
    else{
        count = count + 1;
        porcent.textContent = count + '%';
    }
    return;
}