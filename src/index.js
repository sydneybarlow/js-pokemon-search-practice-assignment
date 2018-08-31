document.addEventListener("DOMContentLoaded", function() {
  let pokemonContainer = document.querySelector(`#pokemon-container`)
  let badcenter = document.getElementById('remove')
  let text = document.querySelector('#pokemon-search-input')
  pokemonContainer.removeChild(badcenter)
  text.addEventListener('keyup', function(e){
    pokemonContainer.innerHTML = ""
    filterPokemon(pokemons, text)
  })
})

function filterPokemon(pokemons, text) {
  let formText = text.value
  let filteredPokemon = pokemons.filter( x => {
    return (x.name).includes(formText)
  })
  getInfo(filteredPokemon)
}

function getInfo(filteredPokemon){
  filteredPokemon.forEach( x => {
    let name = x.name
    let frontImg = x.sprites["front"]
    let backImg = x.sprites["back"]
    let order = x.order - 1
    renderPokemons(name, frontImg, backImg)
  })
}

function renderPokemons(name, frontImg, backImg){
  let pokemonContainer = document.querySelector(`#pokemon-container`)

  let randomDiv = document.createElement('div')
  pokemonContainer.appendChild(randomDiv)

  let pokemonIndividuals = document.createElement('div')
  pokemonIndividuals.className = `pokemon-container`
  randomDiv.appendChild(pokemonIndividuals)

  let divFrame = document.createElement('div')
  divFrame.className = `pokemon-frame`
  divFrame.style = `width:230px;margin:10px;background:#fecd2f;color:#2d72fc`
  pokemonIndividuals.appendChild(divFrame)

  let h1 = document.createElement('h1')
  h1.className = `center-text`
  h1.innerText = name
  divFrame.appendChild(h1)

  let divTwo = document.createElement('div')
  divTwo.style = `width:239px;margin:auto`
  divFrame.appendChild(divTwo)

  let divImg = document.createElement('div')
  divImg.style = `width:96px;margin:auto`
  divTwo.appendChild(divImg)

  let img = document.createElement('img')
  img.src = frontImg
  divImg.appendChild(img)

  let flipp = document.createElement('p')
  flipp.className = `center-text flip-image`
  flipp.style = `padding:10px`
  flipp.innerText = `flip card`
  divFrame.appendChild(flipp)
}
