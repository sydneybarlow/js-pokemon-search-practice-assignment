class Pokemon {
  constructor({name,frontImage,backImage}) {
    this.name = name
    this.frontImage = frontImage
    this.backImage = backImage
    this.image = this.frontImage
  }

  render() {
    return (
      `
      <div>
        <p>${this.name}</p>
        <img src="${this.image}"/>
        <p data-action="flip-image">Flip image</p>
      </div>
      `
    )
  }
}
