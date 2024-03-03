import {
  HeaderBar,
  HeroRestaurante,
  Categoria,
  TituloRestaurante,
  VoltarHome
} from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderProduct = () => {
  return (
    <>
      <HeaderBar>
        <VoltarHome to="/">Restaurantes</VoltarHome>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </HeaderBar>
      <HeroRestaurante>
        <div className="container">
          <Categoria>Italiana</Categoria>
          <TituloRestaurante>La Dolce Vita Trattoria</TituloRestaurante>
        </div>
      </HeroRestaurante>
    </>
  )
}

export default HeaderProduct
