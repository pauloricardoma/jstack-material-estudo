import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Layout />
    </ThemeContextProvider>
  );
};

export default App;
