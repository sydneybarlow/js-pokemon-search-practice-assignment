class PokemonLister {
  constructor(pokemonsJSON) {
    this.pokemons = this.parsePokemonsJSON(pokemonsJSON)
    this.pokemonsToDisplay = []
    this.initBindingsAndEventListiners()
    this.render()
  }

  initBindingsAndEventListiners(containerID) {
    this.pokemonsNodeContainer = document.getElementById('pokemon-container')
    this.searchForm = document.getElementById('pokemon-seach-input')
    this.searchForm.addEventListener('keyup',this.findPokemons.bind(this))
    this.pokemonsNodeContainer.addEventListener('click',this.flipPokemonCard.bind(this))

  }

  parsePokemonsJSON(pokemonsJSON) {
    return pokemonsJSON.map( pokemonJSON => new Pokemon(pokemonJSON) )
  }

  findPokemons() {
    this.restoreFrontImages()
    if (this.searchForm.value !== '') {
      this.pokemonsToDisplay = this.pokemons.filter( pokemon => pokemon.name.includes(this.searchForm.value) )
    } else {
      this.pokemonsToDisplay = []
    }
    this.render()
  }

  flipPokemonCard() {
    if (event.target.dataset.action === 'flip-image') {
        const pokemon = this.pokemons.find( pokemon => pokemon.name === event.target.dataset.pokename)
        pokemon.image === pokemon.frontImage ? pokemon.image = pokemon.backImage : pokemon.image = pokemon.frontImage
        this.render()
    }
  }

  restoreFrontImages() {
    this.pokemons.map( pokemon => pokemon.image = pokemon.frontImage )
  }

  pokemonsHTML() {
    return this.pokemonsToDisplay.map( pokemon => pokemon.render() ).join('')
  }

  render() {
    this.pokemonsNodeContainer.innerHTML = `<div>${this.pokemonsHTML()}</div>`
  }
}
