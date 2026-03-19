const urlBase = "https://rickandmortyapi.com/api"
const urlCharacters = `${urlBase}/character`
const urlLocations = `${urlBase}/location`
const characterSection = document.querySelector("#characters-section")
const locationSection = document.querySelector("#locations-section")

function getData(url, section) {
    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
            renderData(data.results, section);
            initializeSwiper();
        })
}

getData(urlCharacters, characterSection)

function renderData(arr, section) {
    console.log(arr)
    section.innerHTML = ""; // Limpiar antes de agregar
    for (let index = 0; index < arr.length; index++) {
        section.innerHTML += `
        <div class="swiper-slide d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
            ${section === characterSection ?
                `<a href="details.html?id=${arr[index].id}">
                    <img src="${arr[index].image}" class="card-img-top" alt="${arr[index].name}">
                </a>` : `<a href="details.html?id=${arr[index].id}">
                    <img src="https://www.indiewire.com/wp-content/uploads/2019/11/Rick-and-Morty-Season-4-Episode-2.jpg?w=600&h=337&crop=1" class="card-img-top" alt="${arr[index].name}">
                </a>`
            }
                <div class="card-body">
                    <h5 class="card-title">${arr[index].name}</h5>
                    <a href="details.html?id=${arr[index].id}" class="btn btn-outline-secondary">Ver más</a>
                </div>
            </div>
        </div>
        `
    }
}

function initializeSwiper() {
    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
        },
    });

    // Swiper para Locations
    new Swiper('.mySwiper2', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
        },
    });
}

getData(urlLocations, locationSection)

