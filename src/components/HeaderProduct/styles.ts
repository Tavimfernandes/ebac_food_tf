import styled from 'styled-components'
import backgroundImagem from '../../assets/images/fundo-background.svg'
import backgroundLaDolce from '../../assets/images/heroLaDolce.png'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-image: url(${backgroundImagem});
  background-repeat: no-repeat;
  padding: 24px;
  align-items: center;
  background-size: cover;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderLogo = styled.img`
  display: block;
  width: 125px;
`

export const VoltarHome = styled(Link)`
  text-decoration: none;
  color: ${cores.goiaba};
`

export const HeroRestaurante = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundLaDolce});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  color: ${cores.branca};

  .container {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 32px 0;
  }
`

export const TituloRestaurante = styled.h2`
  font-weight: bold;
  font-size: 32px;
`

export const Categoria = styled.p`
  font-weight: 100;
  font-size: 32px;
`
