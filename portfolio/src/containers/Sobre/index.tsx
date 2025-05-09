import Title from '../../components/Title';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem iParagrafosum dolor sit amet, consectetur adipisicing elit.
      Veritatis minus corporis commodi assumenda nemo libero, cupiditate
      inventore unde, numquam et fuga necessitatibus dignissimos at magni labore
      quia doloremque dicta autem.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=erickmjr&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=erickmjr&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;
