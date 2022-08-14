// children component
import React from 'react';
import { Container } from 'react-bootstrap';
import Collection from './collection.albums';

const Albums = (props) => {
  const { title, description } = props;
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h3>{title}</h3>
        <p>{description}</p>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
