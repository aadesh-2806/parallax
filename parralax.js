var text = document.querySelector('#text');
var bird1 = document.querySelector('#bird1');
var bird2 = document.querySelector('#bird2');
var forest = document.querySelector('#forest');
var rocks = document.querySelector('#rocks');
var water = document.querySelector('#water');
var header = document.querySelector('#header');

window.addEventListener('scroll' , function () {
    let value = window.scrollY;
    text.style.top = 50 + value*-0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2.0 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5.0 + 'px';
    btn.style.marginTop = value *1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value *0.5 + 'px';
})