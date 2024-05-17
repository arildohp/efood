class Cardapio {
  title: string
  infos: string[]
  descryption: string
  image: string
  imageNota: string
  id: number
  destaque?: string

  constructor(
    title: string,
    infos: string[],
    descryption: string,
    image: string,
    imageNota: string,
    id: number,
    destaque: string
  ) {
    this.title = title
    this.infos = infos
    this.descryption = descryption
    this.image = image
    this.imageNota = imageNota
    this.id = id
    this.destaque = destaque
  }
}

export default Cardapio
