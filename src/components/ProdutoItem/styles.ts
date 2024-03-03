import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  padding: 8px;
  position: relative;
  border: 1px solid;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 20px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Botao = styled.a`
  color: ${cores.goiaba};
  padding: 6px 4px;
  background-color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: block;
  text-align: center;
`
