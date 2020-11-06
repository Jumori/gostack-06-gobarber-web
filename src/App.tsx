import React from 'react';

import SingIn from './pages/Signin';
import SingUp from './pages/Signup';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SingIn />
    <GlobalStyle />
  </>
);

export default App;
