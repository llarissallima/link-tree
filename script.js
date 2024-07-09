function dlmode() {
  // defini uma variável chamada html, nela criei o objeto documento, nesse objeto adicionei a propriedade documentElement que faz uma referência a toda a raiz html (ou seja, todo o documento em que o scrpt está inserido), depois adicionei a condicional: se a variável html, em seu documento, tiver a classe 'light' adicionada então a remova, se nao (se ela não estiver adicionada) adicione a classe. Tudo isso será feito ao clicar no botão (apenas)
  //

  const html = document.documentElement 

//    if (html.classList.contains('light')) {
//     html.classList.remove('light')
//  } else {
//     html.classList.add('light')
//  } 

// porém ja existe uma função que faz isso com um objeto(trocar sua classe):

  html.classList.toggle("light")

//pegei a imagem (tag image) usando o queryselector (que seleciona elementos que eu queira pegar) e atribui a var img, substitui a imagem usando o setAttribute na condição de: se o light mode estiver ligado, se não vai mantem a imagem original

  const img = document.querySelector("#profile img")
  
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")

  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const text = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    text.setAttribute("alt", "ícone animado preto e branco de uma menina no computador de cor branco, sem rosto e com o fundo branco e a borda preta")
  } else {
    text.setAttribute("alt", "ícone animado preto e branco de uma menina no computador de cor preto, sem rosto e com o fundo branco")
  }
}