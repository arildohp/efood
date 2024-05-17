import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'cardapios'>>`
  background-color: ${cores.laranja_claro};
  padding: 32px;
  padding-top: 64px;
  display: flex;
  align-items: center;

  .container2 {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
