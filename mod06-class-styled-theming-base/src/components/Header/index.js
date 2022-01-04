import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

function HOC(ComponenteHeader) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <ComponenteHeader { ...value } />
          )}
        </ThemeContext.Consumer>
      );
    }
  }
}

// render props
class Header extends Component {
  // // Tipando propTypes dentro do Component, quando se usa
  // static propTypes = {
  //   selectedTheme: PropTypes.string.isRequired,
  //   onToggleTheme: PropTypes.func.isRequired,
  // }
  // * Usando Context API *

  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('theme mudou');
    }
  }

  render() {
    // const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button
          type="button"
          onClick={this.props.handleToggleTheme}
          >
          {this.props.theme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}

export default HOC(Header);

// // A tipagem dos propTypes podem ser feitas assim ou no próprio Component
// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToggleTheme: PropTypes.func.isRequired,
// }
