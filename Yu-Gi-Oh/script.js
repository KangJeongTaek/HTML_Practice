var card = document.querySelector(".card");
var showcase = document.querySelector(".showcase");
card.addEventListener('mousemove',function(e){
    var x = e.offsetX
    var y = e.offsetY
    var rotateY  = -1/5 * x + 20
    var rotateX = 4/30 * y - 20
    showcase.style = 'background-position: ' + (x/5 + y/5) + '%'
    card.style = 'transform :  perspective(350px) rotateY(' + rotateY + 'deg) rotateX('+ rotateX +'deg)'
    
})


card.addEventListener('mouseout', function(){
    card.style = 'transform : persperctive(350px) rotateY(0deg) rotateX(0deg)'
})