import React from 'react';
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError()
    return (
        <div className='container p-5 my-5' id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    );
};

export default Error;