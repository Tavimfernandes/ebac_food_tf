import styled from 'styled-components'

import vetor from '../../assets/Imgs/Vector.png'
import { cores } from '../../styles'

export const Banner = styled.div`
  background-image: url(${vetor});
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 64px;
    margin-bottom: 150px;
    width: 125px;
    height: 58px;
    left: 621px;
    top: 40px;
  }
`
export const Title = styled.h1`
  color: ${cores.principal};
  width: 540px;
  text-align: center;
`
