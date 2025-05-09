import Avatar from '../../components/Avatar';
import Title from '../../components/Title';
import Paragrafo from '../../components/Paragrafo';
import { BotaoTema, Descricao, SideBarContainer } from './styles';

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Erick Mello</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        erickmjr
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
);

export default SideBar;
