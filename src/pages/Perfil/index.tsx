import { useDispatch, useSelector } from 'react-redux'
import { open, openItemDetail } from '../../store/reducers/cart'
import logo from '../../assets/Imgs/logo.png'
import cover from '../../assets/Imgs/Rectangle.png'
import Cart from '../../components/Cart'
import ItemPerfil from '../../components/ItemPerfil'

import { useParams } from 'react-router-dom'

import {
  Cover,
  Hero,
  HeroImage,
  Product,
  ProductList,
  SpanHome
} from './styles'
import { useGetCardapioQuery } from '../../Services/api'
import { Cardapio } from '../Home'
import { RootReducer } from '../../store'

const PerfilRestaurant = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data: perfil } = useGetCardapioQuery(id!)

  const cardapio = perfil?.cardapio as unknown as Cardapio[]

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 100) + '...'
    }
    return descricao
  }

  const itemsCart = useSelector((state: RootReducer) => state.cart.items)

  return (
    <>
      <Hero>
        <SpanHome to={`/`}>Restaurantes</SpanHome>
        <img src={logo} alt="" />
        <span onClick={() => dispatch(open())}>
          {itemsCart.length} produto(s) no carrinho
        </span>
      </Hero>
      <HeroImage>
        <Cover>
          <img src={cover} alt="" />
        </Cover>
        <span>{perfil?.tipo}</span>
        <h2>{perfil?.titulo}</h2>
        <img src={perfil?.capa} alt="" />
      </HeroImage>
      <ProductList className="container">
        {cardapio?.map((item) => (
          <Product key={item.id}>
            <img src={item.foto} alt="" />
            <h3>{item.nome}</h3>
            <p>{getDescricao(item.descricao)}</p>
            <button onClick={() => dispatch(openItemDetail(item))}>
              Adicionar ao carrinho
            </button>
          </Product>
        ))}
      </ProductList>
      <Cart />
      <ItemPerfil
        item={{
          id: 0,
          nome: '',
          foto: '',
          preco: 0,
          descricao: '',
          porcao: ''
        }}
      />
    </>
  )
}

export default PerfilRestaurant
