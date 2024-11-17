import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  close,
  delivery,
  payment,
  confirmation,
  backCart,
  backDelivery,
  remove,
  concluir
} from '../../store/reducers/cart'

import {
  CardItem,
  CartContainer,
  CartInfo,
  Confirmation,
  DeliveryInfo,
  Overlay,
  PaymentInfo,
  SideBar
} from './styles'
import { usePurchaseMutation } from '../../Services/api'

const Cart = () => {
  const { isOpen, isCart, isDelivery, isPayment, isConfirmation } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const itemsCart = useSelector((state: RootReducer) => state.cart.items)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const form = useFormik({
    initialValues: {
      name: '',
      endereco: '',
      cidade: '',
      cep: '',
      number: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'campo inválido').required('campo obrigatório'),
      endereco: Yup.string()
        .min(5, 'campo inválido')
        .required('campo obrigatório'),
      cidade: Yup.string()
        .min(3, 'campo inválido')
        .required('campo obrigatório'),
      cep: Yup.string().min(5, 'campo inválido').required('campo obrigatório'),
      number: Yup.string()
        .min(1, 'campo inválido')
        .required('campo obrigatório'),
      complemento: Yup.string()
        .min(1, 'campo inválido')
        .required('campo obrigatório'),
      cardName: Yup.string()
        .min(1, 'campo inválido')
        .required('campo obrigatório'),
      cardNumber: Yup.string()
        .min(1, 'campo inválido')
        .required('campo obrigatório'),
      cardCode: Yup.string()
        .min(1, 'campo inválido')
        .required('campo obrigatório'),
      mes: Yup.string().min(1, 'campo inválido').required('campo obrigatório'),
      ano: Yup.string().min(1, 'campo inválido').required('campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        biling: {
          name: values.name
        },
        delivery: {
          endereco: values.endereco,
          cidade: values.cidade,
          cep: values.cep,
          numero: values.number,
          complemento: values.complemento
        },
        payment: {
          card: {
            name: values.cardName,
            numero: values.cardNumber,
            code: values.cardCode,
            mes: values.mes,
            ano: values.ano
          }
        },
        products: itemsCart.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const finalizar = () => {
    form.handleSubmit
    dispatch(confirmation())
  }

  const getTotalPrice = () => {
    return itemsCart.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco
    }, 0)
  }

  return (
    <>
      {itemsCart.length !== 0 ? (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={() => dispatch(close())} />
          <SideBar>
            <CartInfo id="cart" className={isCart ? 'is-open' : ''}>
              <ul>
                {itemsCart.map((i) => (
                  <CardItem key={i.id}>
                    <img src={i.foto} alt="" />
                    <div>
                      <h3>{i.nome}</h3>
                      <span>R$ {i.preco}</span>
                    </div>
                    <button
                      onClick={() => dispatch(remove(i.id))}
                      id="removeCart"
                    />
                  </CardItem>
                ))}
              </ul>
              <div id="total">
                Valor Total <span>{formataPreco(getTotalPrice())}</span>
                <button onClick={() => dispatch(delivery())}>
                  Continuar com a entrega
                </button>
              </div>
            </CartInfo>
            <form onSubmit={form.handleSubmit}>
              <DeliveryInfo
                id="delivery"
                className={isDelivery ? 'is-open' : ''}
              >
                Entrega <br />
                <br />
                <label htmlFor="name">Quem irá receber</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <label htmlFor="">Endereço</label> <br />
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <label htmlFor="">Cidade</label> <br />
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <label id="labelCep" htmlFor="">
                  CEP
                </label>
                <label htmlFor="">Numero</label>
                <br />
                <input
                  id="cep"
                  type="text"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <br />
                <label htmlFor="">Complemento</label>
                <input
                  id="complemento"
                  type="text"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <button onClick={() => dispatch(payment())}>
                  Continuar com o pagamento
                </button>
                <button onClick={() => dispatch(backCart())}>
                  Voltar para o carrinho
                </button>
              </DeliveryInfo>
              <PaymentInfo id="delivery" className={isPayment ? 'is-open' : ''}>
                Pagamento - Valor a pagar {formataPreco(getTotalPrice())} <br />
                <br />
                <div>
                  <label htmlFor="">Nome no Cartão</label> <br />
                </div>
                <div>
                  <input
                    id="cardName"
                    type="text"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
                <div>
                  <label id="labelCardNumber" htmlFor="">
                    Número
                  </label>
                  <label id="labelCVV" htmlFor="">
                    CVV
                  </label>
                </div>
                <div>
                  <input
                    id="cardNumber"
                    type="text"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <input
                    id="cardCode"
                    type="text"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
                <div>
                  <label id="labelMes" htmlFor="">
                    Mês
                  </label>
                  <label htmlFor="">Ano</label>
                </div>
                <div>
                  <input
                    id="mes"
                    type="text"
                    value={form.values.mes}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <input
                    id="ano"
                    type="text"
                    value={form.values.ano}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
                <br />
                <button onClick={finalizar}>Finalizar Pagamento</button>
                <button onClick={() => dispatch(backDelivery())}>
                  Voltar para o endereço
                </button>
              </PaymentInfo>
            </form>
            {isSuccess ? (
              <Confirmation
                id="delivery"
                className={isConfirmation ? 'is-open' : ''}
              >
                Pedido Realizado - {data.orderId}
                <br />
                <br />
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br /> <br /> Lembre-se da importância de higienizar as mãos
                  após o recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição. <br /> <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <button onClick={() => dispatch(concluir())}>Concluir</button>
              </Confirmation>
            ) : (
              'Ocorreu um erro, tente novamente mais tarde'
            )}
          </SideBar>
        </CartContainer>
      ) : (
        ''
      )}
    </>
  )
}
export default Cart
