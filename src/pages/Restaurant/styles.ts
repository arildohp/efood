import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const HeaderBar = styled.header`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinkHeader = styled.a`
  color: ${cores.laranja_escuro};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
`
