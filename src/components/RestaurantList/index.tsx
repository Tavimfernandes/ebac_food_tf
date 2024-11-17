import star from '../../assets/Imgs/star.png'
import { Button, RestaurantCard, Restaurants } from './styles'

import { useGetRestaurantsQuery } from '../../Services/api'
import { Restaurant } from '../../pages/Home'

export type Props = {
  title: string
  restaurants: Restaurant[]
  id: string
}

const RestaurantList = () => {
  const { data: restaurante } = useGetRestaurantsQuery()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 200) + '...'
    }
    return descricao
  }

  return (
    <div className="container">
      <Restaurants>
        {restaurante?.map((rest) => (
          <li key={rest.id}>
            <RestaurantCard>
              <img id="capa" src={rest.capa} alt="" />
              <div>
                <h2>{rest.titulo}</h2>
                <span>
                  {rest.avaliacao}
                  <img src={star} alt="" />
                </span>
              </div>
              <p>{getDescricao(rest.descricao)}</p>
              <Button to={`perfil/${rest.id}`}>Saiba mais</Button>
            </RestaurantCard>
          </li>
        ))}
      </Restaurants>
    </div>
  )
}

export default RestaurantList
