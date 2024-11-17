import styled from 'styled-components'
import { cores } from '../../styles'
import close from '../../assets/images/close.png'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const ModalItem = styled.div`
  background-color: ${cores.principal};
  color: #fff;
  width: 1024px;
  height: 344px;
  z-index: 1;
  display: flex;

  img {
    width: 280px;
    height: 280px;
    margin: 32px;
    object-fit: cover;
  }

  h2 {
    margin-top: 32px;
  }

  p {
    width: 656px;
    margin-top: 24px;
  }

  #close {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;
    margin-left: 640px;
  }

  button {
    margin-top: 32px;
    width: 204px;
    background-color: ${cores.fundo2};
    border: none;
    height: 24px;
    color: ${cores.principal};
    font-weight: bold;
    cursor: pointer;
  }
`
