import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import styles from './App.scss';
import { Title } from './styles';

function App() {
  // colchetes indica com destructuring, que está sendo utilizado o primeiro
  // elemento do array, em posts, no segundo é a função que vai fazer a alteração
  // na lista, resetar ela e ter alteração no state, useState recebe valor inicial
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false, removed: true },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 30, read: false, removed: false },
  ]);

  function handleRefresh() {
    // setTimeout(() => {
      // acessa o valor em prevState no momento em que for executar a função, diferente
      // de passar o state e só ouvir o do momento em que for clicado, no caso do
      // exemplo com setTimeout, vai esperar os 2seg para acessar posts, que é prevState
      // setPosts([...posts]) -> pode ser usado assim, se não depender do valor
      // anterior do state
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title#0${prevState.length + 1}`,
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: Math.floor(Math.random() * 100),
          read: false,
          removed: false,
        },
      ]);
    // }, 2000);
  }

  function handleRemovePost(postId) {
    // setPosts((prevState) => (prevState.filter(post => post.id !== postId)));
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId
        ? { ...post, removed: true }
        : post
      )
    ));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as="h2">
          Posts semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>
      <Header />

      <hr />

      {posts.map(post => (
        <Post
          // Sempre que uma lista é renderizada, é necessário uma key
          key={post.title}
          onRemove={handleRemovePost}
          post={post}
          media={posts.length}
          removed={post.removed}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
