import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

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
      name: Yup.string()
        .min(5, 'Nome muito curto')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(5, 'Endereço muito curto')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(3, 'Nome da cidade muito curto')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('Campo obrigatório'),
      number: Yup.number()
        .positive('Número inválido')
        .required('Campo obrigatório'),
      cardName: Yup.string().required('Nome no cartão obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Número de cartão inválido (16 dígitos)')
        .required('Número do cartão obrigatório'),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'Código inválido (3 dígitos)')
        .required('Código obrigatório'),
      mes: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('Mês obrigatório'),
      ano: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido')
        .required('Ano obrigatório')
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log('Valores submetidos:', values)
        setSubmitting(true)

        const response = await purchase({
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

        console.log('Resposta do servidor:', response)
        alert('Compra realizada com sucesso!')
      } catch (error) {
        console.error('Erro no onSubmit:', error)
        alert(
          'Ocorreu um erro ao processar sua compra. Por favor, tente novamente mais tarde.'
        )
      } finally {
        setSubmitting(false)
      }
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
                <InputMask
                  mask="99999-999"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                >
                  {() => (
                    <input
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      placeholder="Digite seu CEP"
                    />
                  )}
                </InputMask>
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
                  <InputMask
                    mask="9999 9999 9999 9999"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    {() => (
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        placeholder="Número do cartão"
                      />
                    )}
                  </InputMask>

                  <InputMask
                    mask="999"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    {() => (
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        placeholder="CVV"
                      />
                    )}
                  </InputMask>
                </div>
                <div>
                  <label id="labelMes" htmlFor="">
                    Mês
                  </label>
                  <label htmlFor="">Ano</label>
                </div>
                <div>
                  <InputMask
                    mask="99"
                    value={form.values.mes}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    {() => (
                      <input
                        id="mes"
                        type="text"
                        name="mes"
                        placeholder="Mês"
                      />
                    )}
                  </InputMask>

                  <InputMask
                    mask="9999"
                    value={form.values.ano}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    {() => (
                      <input
                        id="ano"
                        type="text"
                        name="ano"
                        placeholder="Ano"
                      />
                    )}
                  </InputMask>
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
