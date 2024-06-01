import styled from 'styled-components'
import { cores } from '../../../styles'

export const Fundo = styled.div`
  background-color: ${cores.laranja_claro};
`
export const ListaCards = styled.section`
  width: 1024px;
  height: 708px;
  padding-top: 40px;
  margin: 10px;
`
export const Cards = styled.div`
  border-radius: 8px;
  width: 320px;
  height: 338px;
  background-color: ${cores.laranja_escuro};
  color: ${cores.laranja_medio};
  margin-bottom: 32px;

  img {
    border-radius: 8px;
    width: 304px;
    heigt: 167px;
  }
  div {
    padding: 8px;
    margin-botton: 0;
  }

  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  margin: 4px 0;
  margin-bottom: 10px;
`
export const Botao = styled.button`
  margin-top: 6px;
  width: 304px;
  height: 24px;
  background-color: ${cores.laranja_medio};
  color: ${cores.laranja_escuro};
  weight: 700;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`
