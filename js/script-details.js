fetch("https://rickandmortyapi.com/api/character/2",{method:'GET'})
.then((response) => response.json())
.then((data)=> renderCharDetails(data))
.catch((error) => console.log("error"))

function renderCharDetails(arr){
document.querySelector(".items").innerHTML += `<h5 class="card-title">${arr.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>`
}