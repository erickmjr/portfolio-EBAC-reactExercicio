import styled from 'styled-components';
import { ParagrafoStyled } from '../../components/Paragrafo/styles';

export const Descricao = styled(ParagrafoStyled)`
  margin-top: 16px;
  margin-bottom: 32px;
  white-space: nowrap;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`;

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
