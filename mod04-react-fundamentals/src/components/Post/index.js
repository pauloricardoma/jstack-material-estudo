import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import { Container, Subtitle, Rate } from './styles';

export default function Post(props) {
  // 1ª forma ->
  // if (props.post.read) {
  //   return <h3>{props.post.title} já foi lido</h3>
  // }

  return (
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />

      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Likes: {props.post.likes}</Rate>
      <Rate>Media: {props.post.likes / props.media}</Rate>
    </Container>
  );

  // 3ª forma ->
  // return (
  //   <>
  //     {props.post.read ? <h3>{props.post.title} já foi lido</h3>
  //     : <>
  //       <article>
  //         <strong>
  //           {props.post.read ? <s>{props.post.title}</s> : props.post.title}
  //         </strong>
  //         <button onClick={() => props.onRemove(props.post.id)}>
  //           Remover
  //         </button>
  //         <br />
  //         <small>{props.post.subtitle}</small>
  //         <br />
  //         Likes: {props.post.likes} <br />
  //         Media: {props.post.likes / props.media}
  //       </article>
  //       <br />
  //     </>
  //     }
  //   </>
  // );
};

// Tipagem das props, controle e padronização
Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  // para tipagem de objeto
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  media: PropTypes.number.isRequired,
  removed: PropTypes.bool.isRequired,
}
