//Json

async function pegaJson(){
    let resposta = await fetch('./achives.json')
    resposta = await resposta.json()

    console.info(resposta)
    return resposta
}

//Titulo
async function titulos(){
    var Json = await pegaJson()
    Json = await Json.titulo

    let divs = document.querySelectorAll(".titulo");
    var random = Math.floor(Math.random()*Json.length)

    console.log(divs)
    console.log(random)

    divs.forEach(div => {
        div.innerText = Json[random]
    })
}
titulos()

//Temas
async function theme(){
    var Json = await pegaJson()
    Json = await Json.temas

    var random = Math.floor(Math.random()*Json.length)
    document.querySelector('html').classList.add(Json[random])
    console.info(Json, random)
}
theme()

//Style
async function styleWallpaper(wallpaper){
    console.log(wallpaper)
    document.querySelector('main').style.background = wallpaper
    document.querySelector('main').style.backgroundSize = 'cover'
}

async function styleType(){
    var Json = await pegaJson()
    Json = await Json.modos

    let nameModo = document.querySelector('html').className
    
    console.info(Json, nameModo)
    console.info()
    console.info(document.querySelector('head'))

    document.querySelector('head').innerHTML += `<link rel=\"shortcut icon\" href=\"${Json[nameModo][0]}\" type=\"image/x-icon\">`

    var randomWallpaper = Math.floor(Math.random()*Json[nameModo][1].length)
    styleWallpaper(Json[nameModo][1][randomWallpaper])
}
styleType()