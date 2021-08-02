var search = document.querySelector('#inp');
var ul_area = document.querySelector('.ul_area')
var label = document.querySelector('#label');

label.addEventListener("click", () => {
    var name = search.value
    var ul = document.createElement("ul")

    var h2 = document.createElement("h2")
    h2.appendChild(document.createTextNode(name + ":"))
    ul.appendChild(h2)


    fetch(`https://api.github.com/users/${name}/repos`).then(function (message) {
        return message.json();
    }).then(function (dados) {
        console.log(dados)
        var n = dados.length
        var data = dados


        //inside in HTML
        for (let i = 0; i < n; i++) {
            var link = dados[i].html_url

            var a = document.createElement("a")
            a.setAttribute("href", link)
            a.appendChild(document.createTextNode(dados[i].name))
            var li = document.createElement("li")

            li.appendChild(a)
            ul.appendChild(li)
            ul_area.appendChild(ul)
        }


    })


})
