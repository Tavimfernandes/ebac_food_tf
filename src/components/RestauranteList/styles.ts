import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../RestauranteItem/styles'

export const Container = styled.section<Omit<Props, 'title' | 'restaurantes'>>`
  padding: 32px 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'goiaba' ? cores.goiaba : cores.branca};
    color: ${(props) =>
      props.background === 'goiaba' ? cores.branca : cores.goiaba};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  row-gap: 48px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
