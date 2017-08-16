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
    this.searchForm.addEventListener('keyup',this.displaySearchResults.bind(this))
    this.pokemonsNodeContainer.addEventListener('click',this.handlePokemonCardTogle.bind(this))
  }

  parsePokemonsJSON(pokemonsJSON) {
    return pokemonsJSON.map( pokemonJSON => new Pokemon(pokemonJSON) )
  }

  displaySearchResults() {
    this.restoreFrontImages()
    this.searchPokemons()
    this.render()
  }

  searchPokemons() {
    this.validSearchTerm() ? this.displayOnlyReleventPokemons() : this.hideAllPokemons()
  }

  validSearchTerm() {
    return this.searchForm.value !== ''
  }

  displayOnlyReleventPokemons() {
    this.pokemonsToDisplay = this.pokemons.filter( pokemon => pokemon.name.includes(this.searchForm.value) )
  }

  hideAllPokemons() {
    this.pokemonsToDisplay = []
  }

  findClickedPokemon(event) {
    return this.pokemons.find( pokemon => pokemon.name === event.target.dataset.pokename)
  }

  handlePokemonCardTogle() {
    if (event.target.dataset.action === 'flip-image') {
      this.findPokemonCardAndTogle(event)
      this.render()
    }
  }

  findPokemonCardAndTogle(event) {
    this.toglePokemonCard(this.findClickedPokemon(event))
  }

  toglePokemonCard(pokemon) {
    pokemon.image === pokemon.frontImage ? pokemon.image = pokemon.backImage : pokemon.image = pokemon.frontImage
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
