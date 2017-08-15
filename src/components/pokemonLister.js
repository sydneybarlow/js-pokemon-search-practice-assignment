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
  }

  parsePokemonsJSON(pokemonsJSON) {
    return pokemonsJSON.map( pokemonJSON => new Pokemon(pokemonJSON) )
  }

  findPokemons() {
    if (this.searchForm.value !== '') {
      this.pokemonsToDisplay = this.pokemons.filter( pokemon => pokemon.name.includes(this.searchForm.value) )
    } else {
      this.pokemonsToDisplay = []
    }
    this.render()
  }

  pokemonsHTML() {
    return this.pokemonsToDisplay.map( pokemon => pokemon.render() )
  }

  render() {
    this.pokemonsNodeContainer.innerHTML = `<div>${this.pokemonsHTML()}</div>`
  }
}
