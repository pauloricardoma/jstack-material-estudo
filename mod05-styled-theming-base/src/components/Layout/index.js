import React, { useContext, useEffect, useRef } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';
import { ThemeContext } from '../../context/ThemeContext';

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  // useRef -> uma forma de manter as informações salvas entre as renderizações
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.debug({ theme });
  }, [theme]); // Passar no array as varáveis que devem ser monitoradas
  // Com o array vazio a função passada em useEffect só é executada uma única vez
  // quando o componente é montado, com um valor, sempre que o valor passado tiver
  // alguma alteração a função é executada novamente

  return (
    <>
      <Header />
      <PostsList />
      {theme === 'dark' && (
        <Footer />
      )}
    </>
  );
}
