const urlCharacters = "https://rickandmortyapi.com/api/character"
const characterSection = document.querySelector("#characters-section")
function getData(url) {
    fetch(url, { method: "GET" }).then((res) => res.json()).then((data) => renderData(data.results))

}
getData(urlCharacters)

function renderData(arr) {
    console.log(arr)
    for (let index = 0; index < arr.length; index++) {
        characterSection.innerHTML += `
        <div class="col">
            <div class="card m-5" style="width: 18rem;">
                <img src="${arr[index].image}" class="card-img-top" alt="...">
                <h5 class="card-title">${arr[index].name}</h5>
            </div>
        </div>
        `

    }
}