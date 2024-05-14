import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  cor_fundo: '#FFF8F2',
  cor_principal: '#E66767',
  cor_secundaria: '#FFEBD9',
  branco: '#EEE'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Robot, sans-serif;
  }

  body {
    background-color: ${cores.cor_fundo};
    color: ${cores.cor_principal};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
