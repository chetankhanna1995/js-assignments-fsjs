let joke=document.getElementById("joke");
let btn=document.getElementById("jokeBtn");

let url="https://api.chucknorris.io/jokes/random";

let randomJoke=()=>{

    fetch(url)
    .then((info)=>info.json())
    .then((result)=>{
        joke.textContent=result.value;
        
    })
    .catch((error)=>{
        joke.textContent=error.value;
    })
}

btn.addEventListener("click", randomJoke)
