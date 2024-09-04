import styled from 'styled-components'
import { cores } from '../../styles'

export const Informacao = styled.div`
  background-color: ${cores.branco};
  gap: 0px;

  img {
    max-width: 100%;
    max-height: 100%;
    width: 472px;
    height: 218px;
  }
`

export const Card = styled.div`
  max-width: 472px;
  position: relative;
  margin: 8px;
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-right: 6px;
  }
`

export const Titulo = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  margin: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  width: 440px;
  height: 88px;
  top: 702px;
  left: 179px;
  margin-top: 16px;
  background-color: ${cores.branco};
  border: ${cores.laranja_escuro};
  margin: 8px;
  margin-bottom: 32px;
`
export const Botao = styled.button`
  background-color: ${cores.laranja_escuro};
  color: ${cores.laranja_claro};
  weight: 700;
  width: 82px;
  height: 24px;
  font-size: 14px;
  border: none;
  margin-top: 10px;
  margin: 8px;
  cursor: pointer;
`

export const Border = styled.div`
  border-style: solid;
  border-color: ${cores.laranja_escuro};
  border-top: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;

  div {
    margin-left: 4px;
  }
`
