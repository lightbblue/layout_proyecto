let local = localStorage.getItem("nombre");
let container = document.querySelector("body");

console.log(local)
fetch("../json/cities.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        (e.name==local)?
        container.innerHTML+=/*html*/`
        <header>
            <img src="${e.img}">
                <a href="/html/main.html" class="fa-solid fa-circle-chevron-left back"></a>
            <div class="like"><i class="fa-solid fa-heart"></i></div>
        </header>
        <main>
            <div class="info">
                <div class="title">${e.name} Tour</div>
                <nav class="select">
                    <a class="selected" href="/overview">Overview</a>
                    <a href="/reviews">Reviews</a>
                </nav>
            </div>
            <div class="ash">
            <div class="info2">
                <div class="elem">
                    <div class="icon"><i class="fa-solid fa-star amarillo"></i><div class="dato">${e.rating}</div></div>
                    <div class="tipo">Rating</div>
                </div>
                <div class="elem">
                    <div class="icon"><i class="fa-solid fa-cloud celeste"></i></i><div class="dato">${e.temperature}°C</div></div>
                    <div class="tipo">Duration</div>
                </div>
                <div class="elem">
                    <div class="icon"><i class="fa-solid fa-clock naranja"></i></i><div class="dato">${e.duration} hrs</div></div>
                    <div class="tipo">Duration</div>
                </div>
            </div>
            <div class="desc">${e.description}</div>
        </main>
        <footer>
            <div class="izq">
                <div class="totalPrice">Total Price</div>
                <div class="price">$${e.price}</div>
            </div>
            <a href="./html/main.html" class="der">Book Now</a>
        </footer>
        </div>
        <script src="../js/city.js"></script>
        `:0
    });
})