import { ParagrafoStyled } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
};

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <ParagrafoStyled tipo={tipo}>{children}</ParagrafoStyled>
);

export default Paragrafo;
