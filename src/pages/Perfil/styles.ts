import styled from 'styled-components'
import vetor from '../../assets/Imgs/Vector.png'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Hero = styled.div`
  background-image: url(${vetor});
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-weight: bold;

  img {
    width: 125px;
    height: 58px;
    margin-left: 86px;
  }

  span {
    cursor: pointer;
  }
`

export const SpanHome = styled(Link)`
  text-decoration: none;
  color: ${cores.principal};
`

export const HeroImage = styled.div`
  img {
    width: 100%;
    height: 280px;
    margin-bottom: 50px;
  }
  span {
    color: #fff;
    margin: 25px 170px;
    position: absolute;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-size: 32px;
    line-height: 38px;
  }

  h2 {
    color: #fff;
    position: absolute;
    margin: 214px 170px;
  }
`

export const Cover = styled.div`
  position: absolute;
  width: 100%;
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`

export const Product = styled.div`
  border: 8px solid ${cores.principal};
  width: 320px;
  height: 330px;
  background-color: ${cores.principal};
  color: #fff;
  img {
    width: 304px;
    height: 167px;
  }

  h3,
  p {
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${cores.fundo2};
    border: none;
    height: 24px;
    color: ${cores.principal};
    font-weight: bold;
    cursor: pointer;
  }
`
