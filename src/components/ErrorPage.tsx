import React from "react";
import { useRouteError } from "react-router-dom";
/**
 * ErrorPage Component
 *
 * Renders an error page to display when an unexpected error occurs during navigation.
 *
 * @returns {JSX.Element}
 */
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
