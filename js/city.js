let local = localStorage.getItem("nombre");
let container = document.querySelector("body");
let content = document.querySelector(".content");
console.log(content)
function reviews(){
    fetch("../json/cities.json")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        let content = document.querySelector(".content");
        data.forEach(e=>{
            if(e.name==local){ 
                content.classList.toggle("review");
                content.innerHTML=/*html*/``
                e.reviews.forEach(r=>{
                   content.innerHTML+=/*html*/`
                    <div class="card">
                        <div class="fotocontainer">
                            <img src=${r.user_img} class="foto">
                            <div class="precio">${r.stars}<i class="fa-solid fa-star"></i></div>
                        </div>
                        <div class="r-info">
                            <div class="r-title">${r.name}</div>
                            <div class="r-desc">${r.description}</div>
                        </div>
                    </div>`
                })
                document.querySelector(".reviews").classList.toggle("selected");
                document.querySelector(".overview").classList.toggle("selected")
            }else{0};
        })
    })
    
}
function overview(){
    fetch("../json/cities.json")
    .then(response => { return response.json(); })
    .then(data =>{
        let content = document.querySelector(".content");
        data.forEach(e=>{
            content.classList.toggle("review")
            if(e.name==local){content.innerHTML=/*html*/`<div class="info2">
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
            <footer>
                <div class="izq">
                    <div class="totalPrice">Total Price</div>
                    <div class="price">$${e.price}</div>
                </div>
                <a href="./main.html" class="der">Book Now</a>
            </footer>`
            document.querySelector(".overview").classList.toggle("selected");
            document.querySelector(".reviews").classList.toggle("selected")}else{0};
        })
    })
}
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
                <a href="./main.html" class="fa-solid fa-circle-chevron-left back"></a>
            <div class="like"><i class="fa-solid fa-heart"></i></div>
        </header>
        <main>
            <div class="info">
                <div class="title">${e.name} Tour</div>
                <nav class="select">
                    <button class="overview selected" onclick="overview()">Overview</button>
                    <button class="reviews" onclick="reviews()">Reviews</button>
                </nav>
            </div>
            <div class="content">
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
                <footer>
                    <div class="izq">
                        <div class="totalPrice">Total Price</div>
                        <div class="price">$${e.price}</div>
                    </div>
                    <a href="./main.html" class="der">Book Now</a>
                </footer>
            </div>
        </main>   
        <script src="../js/city.js"></script>
        `:0
    });
})