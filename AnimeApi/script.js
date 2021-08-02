let label = document.querySelector('#label')

let input = document.querySelector('#inp')

label.addEventListener("click", () => { 
    let name = String(input.value)
    let animeResu = document.querySelector('.Resul')
    let url = `https://kitsu.io/api/edge/anime?filter[text]=${name}`;
    
    let img = document.querySelector('.img_anime')
    let sinopse = document.querySelector('.search_resu .image_anime .text_image_anime .sinopse')
   
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (dados) {
            
            var anime = dados.data[1].attributes.canonicalTitle
            var sinopseAnime = dados.data[1].attributes.synopsis
            var id = dados.data[0].id

            animeResu.innerHTML = `${anime}`;
            img.src = `https://media.kitsu.io/anime/poster_images/${id}/small.jpg?1597604210`
            sinopse.innerHTML = `<h1> Sinopse </h1> ${sinopseAnime}`

         
        });
        
})







