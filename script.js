function toggleMode() {
   const html = document.documentElement //document é o objeto q todo programa tem, estou criando a const q acessa o document e procura algo dentro dele usando o .

    /* if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/

    html.classList.toggle('light') // Isso faz sozinho tudo q aquele if tava fazendo.

    const img = document.querySelector("#profile img") //monstrando onde esta a imagem

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png') //indica o que quer mudar, depois poe a alteração
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
}