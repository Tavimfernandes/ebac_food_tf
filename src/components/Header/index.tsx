import { HeaderBar, LegendaHeader } from './styles'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <HeaderBar>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <LegendaHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </LegendaHeader>
      </div>
    </HeaderBar>
  )
}

export default Header
