import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <div className="notfound">
      <div className="notfound__message">
        <h2 className="notfound__message-title">
          Oops!
        </h2>
        <p className="notfound__message-text">
          We can't seem to find the page you're looking for
        </p>
        <button
          type="button"
          className="notfound__link"
          onClick={() => history.push('/')}
        >
          Back to Main Page
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
