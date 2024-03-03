import Restaurante from '../../models/Restaurante'

import pizza from './../../assets/images/pizza.png'
import HeaderProduct from '../../components/HeaderProduct'
import ProdutosList from '../../components/ProdutosList'

const Produtos: Restaurante[] = [
  {
    id: 1,
    category: 'Pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 2,
    category: 'Pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 3,
    category: 'Pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 4,
    category: 'Pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 5,
    category: 'Pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 6,
    category: 'Pizza',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  }
]

const RestaurantePage = () => (
  <>
    <HeaderProduct />
    <ProdutosList restaurantes={Produtos} background="goiaba" />
  </>
)

export default RestaurantePage
