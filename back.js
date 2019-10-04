let btn1 = document.querySelector("[data-dom = btn1]");
let btn2 = document.querySelector ("[data-dom =btn2]");
let h3 = document.querySelector ("[data-dom = h3]");
let background = document.getElementById ("color");

btn1.addEventListener ("input", function(){
    background.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")" ;
})

