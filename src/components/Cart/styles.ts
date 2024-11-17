import styled from 'styled-components'
import { cores } from '../../styles'
import remove from '../../assets/Imgs/del.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  #total {
    color: ${cores.fundo};
    font-weight: bold;
    span {
      margin-left: 50%;
    }
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
export const SideBar = styled.aside`
  background-color: ${cores.principal};
  z-index: 1;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 360px;
  width: 100%;
  padding-bottom: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }

  > div {
    span {
      margin-left: 160px;
    }
    font-weight: bold;
    color: #fff;
  }

  button {
    margin-top: 32px;
    width: 100%;
    background-color: ${cores.fundo2};
    border: none;
    height: 24px;
    color: ${cores.principal};
    font-weight: bold;
    cursor: pointer;
  }
`
export const CardItem = styled.li`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: ${cores.fundo2};
  color: ${cores.principal};
  margin-bottom: 16px;
  font-weight: bold;

  img {
    width: 90px;
    height: 80px;
    margin: 8px;
  }

  h3 {
    margin: 8px 0 32px;
  }

  button {
    background-image: url(${remove});
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin-top: 80px;
    margin-left: 300px;
  }
`
export const CartInfo = styled.section`
  display: none;

  &.is-open {
    display: block;
  }
`
export const DeliveryInfo = styled.section`
  color: ${cores.fundo};
  font-weight: bold;
  display: none;

  &.is-open {
    display: block;
  }

  input {
    margin-bottom: 18px;
    width: 100%;
    height: 32px;
    background-color: ${cores.fundo2};
    border: none;
  }

  span {
    margin-right: 43%;
  }

  #labelCep {
    margin-right: 45%;
  }
  #cep,
  #number {
    width: 145px;
  }

  #number {
    margin-left: 34px;
  }

  button {
    margin-top: 8px;
  }
`
export const PaymentInfo = styled.section`
  div {
    display: flex;

    label {
      justify-content: space-between;
      display: flex;
    }
  }
  color: ${cores.fundo};
  font-weight: bold;
  display: none;

  &.is-open {
    display: block;
  }

  input {
    margin-bottom: 18px;
    width: 100%;
    height: 32px;
    background-color: ${cores.fundo2};
    border: none;
  }

  > span {
    margin-right: 35%;
  }

  #cardCode {
    width: 30%;
  }

  #cardNumber {
    margin-right: 10%;
    width: 70%;
  }

  #labelCVV {
    margin-left: 55%;
  }

  #labelMes {
    margin-right: 50%;
  }

  #ano {
    width: 40%;
  }

  #mes {
    margin-right: 20%;
    width: 40%;
  }

  button {
    margin-top: 8px;
  }
`
export const Confirmation = styled.section`
  color: ${cores.fundo};
  font-weight: bold;
  display: none;

  &.is-open {
    display: block;
  }

  p {
    font-weight: normal;
    text-align: justify;
  }

  button {
    margin-top: 8px;
  }
`
