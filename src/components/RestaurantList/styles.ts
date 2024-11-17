import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Restaurants = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
`

export const RestaurantCard = styled.div`
  border: 2px solid;
  li {
    width: 472px;
    height: 420px;
    align-items: center;
    text-align: justify;
  }

  #capa {
    height: 217px;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      font-weight: bold;
    }

    img {
      margin: 8px;
      width: 21px;
      height: 20px;
    }
  }

  img {
    width: 100%;
  }

  h2,
  p {
    margin: 8px;
  }
`
export const Button = styled(Link)`
  display: flex;
  margin: 8px;
  width: 100px;
  align-items: center;
  padding-left: 8px;
  height: 24px;
  background-color: ${cores.principal};
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
`
