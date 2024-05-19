import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja_claro: '#FFF8F2',
  laranja_escuro: '#E66767',
  laranja_medio: '#FFEBD9',
  branco: '#FFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Robot, sans-serif;
    text-decoration: none
  }

  body {
    background-color: ${cores.laranja_medio};
    color: ${cores.laranja_escuro};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
