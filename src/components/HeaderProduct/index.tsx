import {
  HeaderBar,
  HeroRestaurante,
  HeaderLogo,
  Categoria,
  TituloRestaurante,
  VoltarHome
} from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderProduct = () => {
  return (
    <>
      <HeaderBar>
        <div className="container">
          <VoltarHome to="/">Restaurantes</VoltarHome>
          <HeaderLogo src={logo} alt="logo" />
          <p>0 produto(s) no carrinho</p>
        </div>
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
