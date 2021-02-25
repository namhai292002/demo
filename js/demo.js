var menuItem = document.querySelectorAll('.menu-item');
var titlePrd = document.querySelectorAll('.title-prd');
function changeItem (item, color1){
    item.forEach(ele => {
        ele.addEventListener('click', () => {
            for( var j = 0; j < item.length; j++){
                item[j].style.color = color1;
            }
            ele.style.color ="#c89979";
        })
    });
}
changeItem(menuItem,"white");
changeItem(titlePrd,"black");

var boxPrd = document.querySelectorAll('.box_prd');
titlePrd.forEach(item => {
    item.addEventListener('click', () => {
        for(var i = 0; i < boxPrd.length; i++){
            boxPrd[i].style.display = "none"
            if(item.id === boxPrd[i].getAttribute('data-target')){
                boxPrd[i].style.display = "block"
            }
            if(item.id === "popular_prd"){
                boxPrd[i].style.display = "block";
            }
        }
    })
})
// ============================== onscroll menu ==================================
window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.onscroll');
var sticky = 1000;

function myFunction() {
if (window.pageYOffset > sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}
// ==========================wow.JS===================================//
new WOW().init();

var btnBar = document.querySelector('.bars');
var menuBar = document.querySelector('.layer-menu');
btnBar.addEventListener('click', () => {
    menuBar.classList.add('display');
})
menuBar.addEventListener('click', () => {
    menuBar.classList.remove('display');
})