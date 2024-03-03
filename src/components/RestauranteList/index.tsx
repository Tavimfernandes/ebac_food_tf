import Restaurante from '../../models/Restaurante'
import RestauranteItem from '../RestauranteItem'

import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'branca' | 'goiaba'
  restaurantes: Restaurante[]
}

const RestauranteList = ({ background, title, restaurantes }: Props) => (
  <Container background={background}>
    <div>
      <h2>{title}</h2>
      <List>
        {restaurantes.map((restaurante) => (
          <RestauranteItem
            key={restaurante.id}
            category={restaurante.category}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            title={restaurante.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteList
