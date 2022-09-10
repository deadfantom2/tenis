import React from 'react';
import { Row } from 'react-bootstrap';

const LoadAndErrorContainer = ({ children, loading }) => {
  console.log('LoadAndErrorContainer');

  return (
    <>
      {loading && <h1>Is Loading...</h1>}
      <div className="container_body">
        <Row>{children}</Row>
      </div>
    </>
  );
};

export default LoadAndErrorContainer;
