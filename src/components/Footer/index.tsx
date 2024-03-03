import { LegendaFooter, Rodape, RedesSociais } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => {
  return (
    <Rodape>
      <img src={logo} alt="Logo efood" />
      <RedesSociais>
        <img src={instagram} alt="Logo instagram" />
        <img src={facebook} alt="Logo Facebook" />
        <img src={twitter} alt="Logo Twitter" />
      </RedesSociais>
      <LegendaFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </LegendaFooter>
    </Rodape>
  )
}

export default Footer
