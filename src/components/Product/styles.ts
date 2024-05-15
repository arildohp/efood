import styled from 'styled-components'
import { cores } from '../../styles'

export const Body = styled.main`
  background-color: ${cores.laranja_claro};
  display: flex;
  align-items: center;
`

export const Card = styled.div`
  background-color: ${cores.branco};
  max-width: 1024px;

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
`
