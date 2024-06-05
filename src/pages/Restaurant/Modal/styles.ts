import { styled } from 'styled-components'
import { cores } from '../../../styles'

export const Modall = styled.div`
  color: ${cores.laranja_claro};
  background-color: ${cores.laranja_escuro};
  height: 344px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  h3 {
    font-size: 18px;
    font-weight: 900;
    height: 22px;
    align: center;
    margin-top: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`
export const Botao = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${cores.laranja_medio};
  color: ${cores.laranja_escuro};
  weight: 700;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

export const Information = styled.div`
  height: 280px;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;

  img {
    width: 280px;
    height: 280px;
    margin-right: 20px;
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;

  header {
    display: flex;
    height: 16px;
    display: flex;
    margin-top: 16px;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
