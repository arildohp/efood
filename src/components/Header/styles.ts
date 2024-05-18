import styled from 'styled-components'
import { cores } from '../../styles'

export const Hero = styled.header`
  background-color: ${cores.laranja_medio};
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.h1`
  display: flex;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  width: 539px;
  height: 84px;
  margin-top: 236px;
`
export const Image = styled.div`
  display: flex;
  width: 125px;
  height: 57.5px;
  top: 40px;
  position: absolute;
`
