import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.section`
  padding-top: 50px;
  background-color: ${cores.laranja_claro};
  padding-bottom: 100px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`
export const Containers = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Modal = styled.section`
  color: ${cores.laranja_claro};
  background-color: ${cores.laranja_escuro};
  height: 344px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;

  img {
    width: 280px;
    height: 100%;
  }

  div {
    margin: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    height: 21px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    padding-top: 32px;
  }

  Botao {
    width: 218px;
    height: 24px;
  }
`
