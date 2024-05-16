import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.laranja_claro};
  padding: 32px;
  display: flex;
  align-items: center;

  .container2 {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    margin-top: 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 0;
`
