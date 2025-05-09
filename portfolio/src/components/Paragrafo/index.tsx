import { ParagrafoStyled } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <ParagrafoStyled fontSize={fontSize} tipo={tipo}>{children}</ParagrafoStyled>
);

export default Paragrafo;
