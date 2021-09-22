import Theme from './Styles/Theme';
import GlobalStyle from './Styles/global';

import Routes from './routes'

const App = () => {
  return (
    <Theme>
      <Routes />
      <GlobalStyle />
    </Theme>
  );
}

export default App;
