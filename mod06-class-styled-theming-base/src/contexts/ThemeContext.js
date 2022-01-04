import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState(localStorage.getItem('theme2').toString());

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark',);
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
//       { children }
//     </ThemeContext.Provider>
//   );
// }

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = 'dark';

    try {
      theme = JSON.parse(localStorage.getItem('theme2'));
    } catch (err) {
      console.log(err);
    }

    this.state = {
      theme,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem('theme2', JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }), () => {});
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme
        }}
      >
        { this.props.children }
      </ThemeContext.Provider>
    );
  }
}
