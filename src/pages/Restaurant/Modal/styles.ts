import { styled } from 'styled-components'
import { cores } from '../../../styles'

export const Modall = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

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
  color: ${cores.laranja_claro};
  background-color: ${cores.laranja_escuro};
  height: 344px;
  position: relative;
  z-index: 1;

  header {
    margin-top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    height: 32px;
    justify-content: right;

  img {
    display: block;
    max-width: 100%;
    margin-right: 8px;
  }


`
