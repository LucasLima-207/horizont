
var titleRoom1;
var titleRoom2;
var titleRoom3;

titleRoom1 = "Quarto Padrão";
titleRoom2 = "Quarto Vip";
titleRoom3 = "Quarto Premium";

var el = document.getElementById('title-room-1');
el.textContent = titleRoom1;

var el2 = document.getElementById('title-room-2');
el2.textContent = titleRoom2;

var el3 = document.getElementById('title-room-3');
el3.textContent = titleRoom3;

var priceRoom1 = 100;
var priceRoom2 = 200;
var priceRoom3 = 300;

var priceroom1 = document.getElementById('cost-room-1');
priceroom1.textContent = 'R$ ' +priceRoom1;
 
var priceroom2 = document.getElementById('cost-room-2');
priceroom2.textContent = 'R$ ' + priceRoom2;

var priceroom3 = document.getElementById('cost-room-3');
priceroom3.textContent = 'R$ ' + priceRoom3;
