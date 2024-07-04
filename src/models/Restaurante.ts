class Restaurante {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  rate: number
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    rate: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rate = rate
  }
}

export default Restaurante
