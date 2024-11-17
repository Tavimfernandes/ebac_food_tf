import { Banner as Ban, Title } from './styles'

import logo from '../../assets/Imgs/logo.png'

const Banner = () => {
  return (
    <Ban>
      <img src={logo} alt="" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Ban>
  )
}

export default Banner
