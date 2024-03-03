import { createGlobalStyle } from 'styled-components'

export const cores = {
  goiaba: '#E66767',
  bege: '#FFEBD9',
  branca: '#FFF',
  fundo: '#FFF8F2',
  cinza: '#ccc'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.goiaba};
  }

`
