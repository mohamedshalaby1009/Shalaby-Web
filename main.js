let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let shalaby = document.querySelector('.shalaby');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 5 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3  + 'px';
    shalaby.style.fontSize = value  + 'px';
   if(scrollY >= 61){
    shalaby.style.fontSize = 61  + 'px';
    shalaby.style.position = 'fixed';
    if(scrollY >= 416){
        shalaby.style.display = 'none';
    }else{
        shalaby.style.display = 'block';
    }
    if(scrollY >= 72){
        document.querySelector('.main').style.background = 'linear-gradient(rgb(78 124 187),rgb(20, 0, 32))'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(rgb(30,2,  19),rgb(20, 0, 32))'
    }
    
    }
}
