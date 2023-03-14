var images= [
 "pai.jpg","mae.webp","crianca1.jpg","bebe.png"
];
var names =[
"Flamarion","Georgiana","João Pedro","Antônio","Leticia"
];
var i = 0;
function update() 
{
    i++ ;
    var numberoffamilimemberinarray = 5
    if(i > numberoffamilimemberinarray )
{
    i = 0;
}
var updateImage = images[i];
var updateName = names[i];
document.getElementById("pai.jpg").src = updateImage;
document.getElementById("bebe.png").src = updateName;
document.getElementById("mae.webp").src = updateName;
document.getElementById("craca1.jpg").src = updateName;
document.getElementById("irma1.jpg").src = updateName;
}