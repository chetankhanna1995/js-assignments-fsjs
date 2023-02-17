let canvas=document.getElementById("canvas");

let btn=document.getElementById("button");



function colorGenerator(){
    let code="0123456789ABCDEF";
    let cons="#";
    for(let i=0; i<6; i++){
        cons=cons+code[Math.floor(Math.random()*16)]
    }
    return cons
}
function bgcolor(){
    canvas.style.backgroundColor=colorGenerator();
}
btn.addEventListener("click", bgcolor);