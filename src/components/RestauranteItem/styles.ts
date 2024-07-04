import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: 1px solid;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardBody = styled.div`
  padding: 8px 8px 12px 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const TituloAndRate = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Avaliacao = styled.p`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  gap: 8px;
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

export const Botao = styled(Link)`
  color: ${cores.bege};
  padding: 4px 6px;
  background-color: ${cores.goiaba};
  font-size: 14px;
  font-weight: bold;
  border: none;
  text-decoration: none;
  cursor: pointer;
`
