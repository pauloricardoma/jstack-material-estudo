import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes/index';
class App extends React.Component {
  // // * Tem uma forma mais simples de fazer isso, instalando um pacote *
  // // método constructor é criado assim que a class é inicia/criada a instância
  // constructor(props) {
  //   // Sempre que existir uma class que extends outra class, é necessário chamar
  //   // o método contructor dela, esse é o uso da função especial super();
  //   // o que acontece => super(); -> React.Component.constructor();
  //   super(props);

  //   this.state = {
  //     theme: 'dark',
  //   }

  //   // função bind nativa do JS, atribui um novo valor this onde é usada, aqui
  //   // atribui o valor this do constructor ao valor this de handleToggleTheme
  //   // agora o this dessa função é o this do constructor
  //   this.handleToggleTheme = this.handleToggleTheme.bind(this);
  // }

  // // * Enviados para o ThemeContext.js *
  // state = {
  //   theme: localStorage.getItem('theme2').toString(),
  // }

  // // aqui o this funciona normalmente pelo uso da arrow function, que herda o
  // // this, do componente pai
  // handleToggleTheme = () => {
  //   // // função força a renderização do Component, se for preciso o uso
  //   // this.forceUpdate();

  //   this.setState(prevState => ({
  //     theme: prevState.theme === 'dark' ? 'light' : 'dark',
  //   }));
  // }

  state = {
    changed: false,
  }
  // executando useEffect em class Components
  // useEffect(() => {}) -> renderizar sempre que o Component for renderizado, equivalente
  // a usar a função dentro do render();
  // useEffect(() => {}, []) -> renderizar somento uma vez quando for iniciado, equivalente
  // a usar componentDidMount() {} e usar a função dentro dele;
  // useEffect(() => { return () => {} }, []) -> renderiza a função passada no return //
  // quando component sair da tela equivalente a usar componentWillUnmount() {};
  componentDidMount() {
    console.log('componentDidMount executed');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {currentState: this.state, prevState, prevProps,})
  }

  // capturar errors e infos do component filho
  componentDidCatch(error, info) {
    console.log({error, info})
  }

  // funciona como um middleware, executando antes do render, e podendo controlar o render
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate',
    {currentState: this.state, nextState, nextProps,});

    return nextState.changed; // se return false; component não renderiza
  }

  componentWillUnmount() {

  }

  render() {
    console.log('rendered');
    // usando Theme Context dentro de class Component
    return (
      <ThemeProvider>
          <button onClick={() => this.setState({changed: true})}>Change State</button>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || theme.dark}>
              <GlobalStyle />
              <button onClick={handleToggleTheme}>Change theme</button>
              {/* Chamando o componente assim <Layout/> como se estivese sendo chamado
              um new Layout, já instânciando a class, o que acontece com o <App/> no index  */}
              {theme === 'dark' && <Layout />}
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;

// * Sem uso de class, somente com componente funcional, maior praticidade *
// function App() {
//   const [theme, setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     // quando numa situação de uso de valor dinâmico, usar os colchetes em vez
//     // de themes.theme -> themes[theme]
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeProvider
//       theme={currentTheme}
//     >
//       <GlobalStyle />
//       <Layout
//         selectedTheme={theme}
//         onToggleTheme={handleToggleTheme}
//       />
//     </ThemeProvider>
//   );
// };
