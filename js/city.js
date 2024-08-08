let local = localStorage.getItem("nombre");

fetch("../json/cities.json")
.then(response => {
    return response.json();
})
.then(data =>{
    data.forEach(e => {
        (e.id==local)?`
        
        `:0
    });
})