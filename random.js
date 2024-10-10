

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
   
    let h1 = document.querySelector("h1");
    let randomColor=getColor();
   
    h1.innerText=randomColor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
    let h2=document.querySelector("h2");
    h2.innerText=randomColor;
   
    console.log("color updated");
    
});



function getColor(){
   let green= Math.floor(Math.random() * 255).toString(16).padStart(2,0);
    let blue=Math.floor(Math.random() * 255).toString(16).padStart(2,0);
    let red=Math.floor(Math.random() * 255).toString(16).padStart(2,0);
    let alfa=Math.floor(Math.random() * 255).toString(16).padStart(2,0);

    let color=`#${green}${blue}${red}${alfa}`;
    return color;


}