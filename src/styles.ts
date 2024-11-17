import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  principal: '#E66767',
  fundo: '#F5F5F5',
  fundo2: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: ${cores.fundo};
  color: ${cores.principal};
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
