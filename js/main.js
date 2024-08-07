let container = document.querySelector(".c1");
let container2 = document.querySelector(".c2");
function guardar(id) {
    localStorage.setItem("nombre",id)
}
fetch("../json/cities.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        (e.id<7)?
        container.innerHTML+=/*html*/`
        <a class="card" href="./city.html" id="${e.name}" onclick="guardar(id)">
            <img class="card-img" src="${e.img}" alt="${e.name}">
            <div class="card-info">
                <div class="name">${e.name}</div>
                <div class="price">$${e.price}</div>
            </div>
        </a>`:0
    });
    data.forEach(e => {
        (e.id>7)?
        container2.innerHTML+=/*html*/`
        <a class="card" href="./city.html" id="${e.name}" onclick="guardar(id)">
            <img class="card-img" src="${e.img}" alt="${e.name}">
            <div class="card-info">
                <div class="name">${e.name}</div>
                <div class="price">$${e.price}</div>
            </div>
        </a>`:0
    });
})