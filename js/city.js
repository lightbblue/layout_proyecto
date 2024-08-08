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
                    <a href="">Overview</a>
                    <a href="">Reviews</a>
                </nav>
            </div>
        </main>
        <footer>

        </footer>
        <script src="../js/city.js"></script>
        `:0
    });
})