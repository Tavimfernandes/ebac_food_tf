import styled from 'styled-components'
import backgroundImagem from '../../assets/images/fundo-background.svg'

export const HeaderBar = styled.header`
  background-image: url(${backgroundImagem});
  background-repeat: no-repeat;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`

export const LegendaHeader = styled.p`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  text-align: center;
  max-width: 539px;
  margin-top: 138px;
`
