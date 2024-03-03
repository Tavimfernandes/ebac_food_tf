import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${cores.bege};
  padding: 40px 0;
`

export const LegendaFooter = styled.p`
  font-size: 10px;
  max-width: 480px;
  line-height: 12px;
  text-align: center;
`

export const RedesSociais = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  max-width: 88px;
  margin: 32px 0 80px 0;
`
