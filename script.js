function toggleMode() {

    const html = document.documentElement
    
    //if (html.classList.contains('light')){
        //html.classList.remove('light')
    //} else {
        //html.classList.add("light")
    //}
    
    //OU
    
    html.classList.toggle('light')
    
    //pegar a tag img
    
    const img = document.querySelector("#profile img")
    
    //subsituir a imagem
    
    if (html.classList.contains('light')){
    
        //se tiver light mode, adicionar imagem light
        img.setAttribute('src', './assets/Avatar branco.png')
    } else {
    
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/meu-avatar.png')
    
    
    }
    
    
    
    
    
    
    }