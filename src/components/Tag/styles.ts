import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja_escuro};
  color: ${cores.laranja_claro};
  height: 24px;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
`
