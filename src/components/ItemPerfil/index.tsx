import { ModalContainer, ModalItem, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { add, closeItemDetail } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'

export type Props = {
  item: Cardapio
}

const ItemPerfil = ({ item }: Props) => {
  const ItemPerfilOpen = useSelector(
    (state: RootReducer) => state.cart.isOpenItemDetail
  )

  const itemDetail = useSelector((state: RootReducer) => state.cart.cartTemp)

  const dispatch = useDispatch()

  return (
    <ModalContainer className={ItemPerfilOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(closeItemDetail())} />
      <ModalItem>
        {itemDetail.map((i) => (
          <>
            <img key={i.id} src={i.foto} alt="" />
            <div>
              <button onClick={() => dispatch(closeItemDetail())} id="close" />
              <h2>{i.nome}</h2>
              <p>
                {i.descricao}
                <br />
                <br /> {i.porcao}
              </p>
              <button onClick={() => dispatch(add(i))}>
                Adicionar ao carrinho - R$ {i.preco}0
              </button>
            </div>
          </>
        ))}
      </ModalItem>
    </ModalContainer>
  )
}

export default ItemPerfil
