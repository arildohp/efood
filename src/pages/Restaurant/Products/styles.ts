import styled from 'styled-components'
import { cores } from '../../../styles'

export const Fundo = styled.div`
  background-color: ${cores.laranja_claro};
`
export const ListaCards = styled.section`
  width: 1024px;
  height: 708px;
  padding-top: 40px;
`
export const Cards = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.laranja_escuro};
  color: ${cores.laranja_medio};

  img {
    width: 304px;
    heigt: 167px;
  }
  div {
    padding: 8px;
    margin-botton: 0;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  margin: 8px 0;
`
export const Botao = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${cores.laranja_medio};
  color: ${cores.laranja_escuro};
  weight: 700;
  font-bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`
