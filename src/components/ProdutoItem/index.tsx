import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, Botao } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

const ProdutoItem = ({ title, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao href="#">Adicionar ao Carrinho</Botao>
  </Card>
)

export default ProdutoItem
