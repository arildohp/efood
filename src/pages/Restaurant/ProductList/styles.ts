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
