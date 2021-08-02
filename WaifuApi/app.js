const sfw = document.querySelector('#sfw')
const nsfw = document.querySelector('#nsfw')


sfw.addEventListener("click", () => {

    let categories = ['waifu', 'neko', ' cringe', 'poke']


    let i = Math.floor(Math.random() * categories.length)
    let link = `https://api.waifu.pics/sfw/${categories[i]}`
    console.log(categories[i])
    let resu = document.querySelector('.resu')
   
    fetch(link).then(function (response) {
        return response.json()
    }).then(function (dados) {

        var img = dados.url
        console.log(img)

        resu.src = `${img}`
    })
})

nsfw.addEventListener("click", ()=> {

    let categoriesNfsw = ['waifu', 'neko', 'blowjob']
    let i = Math.floor(Math.random() * categoriesNfsw.length)
    let link = `https://api.waifu.pics/nsfw/${categoriesNfsw[i]}`
    console.log(categoriesNfsw[i])
    let resu = document.querySelector('.resu')
    const sfw = document.querySelector('#sfw')
    const nsfw = document.querySelector('#nsfw')
    fetch(link).then(function (response) {
        return response.json()
    }).then(function (dados) {

        var img = dados.url
        console.log(img)

        resu.src = `${img}`
    })
})