import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja_escuro};
  color: ${cores.laranja_claro};
  width: 82px;
  height: 24px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: 4px 6px';
`
