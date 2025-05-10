import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import EstiloGlobal, { Container } from './styles';
import SideBar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import temaLight from './themes/light';
import temaDark from './themes/dark';

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  function trocaTema() {
    setDarkModeOn(!darkModeOn);
  }

  return (
    <ThemeProvider theme={darkModeOn ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema}/>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
