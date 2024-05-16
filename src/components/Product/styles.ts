import styled from 'styled-components'
import { cores } from '../../styles'

export const Informacao = styled.div`
  background-color: ${cores.branco};
  gap: 0px;
`

export const Card = styled.div`
  margin-bottom: 32px;
  max-width: 472px;
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`

export const Titulo = styled.h3`
  width: 100%;
  height: 21px;
  top: 665px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  width: 456px;
  height: 88px;
  top: 702px;
  left: 179px;
  margim-top: 16px;
  background-color: ${cores.branco};
  border: 0px, 1px, 1px, 1px;
`
export const Botao = styled.button`
  background-color: ${cores.laranja_escuro};
  color: ${cores.laranja_claro};
  width: 82px;
  height: 24px;
  font-size: 14px;
`
