import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 340px;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.fundo2};
  margin-top: 50px;

  img {
    margin-top: 64px;
    width: 125px;
  }
`
export const SocialLinks = styled.div`
  img {
    width: 24px;
    margin-right: 8px;
  }
`

export const Creditos = styled.span`
  margin-top: 50px;
  width: 480px;
  height: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
