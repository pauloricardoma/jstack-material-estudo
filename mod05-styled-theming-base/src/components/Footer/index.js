import React, { useContext, useEffect } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../context/ThemeContext';

export default function Footer() {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  // Usando useEffect para tirar eventListener quando  o component não estiver
  // montado, evitando uso desnecessário da memória
  useEffect(() => {
    function handleScroll() {
      console.debug('scrolou');
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
