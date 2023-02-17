let sum=0;

let binary=document.querySelector("#binary");
let btn=document.querySelector(".btn");
let rs=document.querySelector(".result")

btn.addEventListener("click", (convert)=>{

    let binnaryArray= (String(binary.value)).split("");
    let reverse=binnaryArray.reverse();
    
    for(let i=0; i<reverse.length; i++){

        sum=sum+(reverse[i]*(2**i))
    }

    rs.innerHTML=sum;
    convert.preventDefault();
});
