import Theme from './Styles/Theme';
import GlobalStyle from './Styles/global';

import Home from './Pages/Home'

const App = () => {
  return (
    <Theme>
      <Home />
      <GlobalStyle />
    </Theme>
  );
}

export default App;
