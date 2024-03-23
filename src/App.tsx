import "./App.scss";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game-details",
      element: <GameDetails></GameDetails>,
    },
    {
      path: "/game-details/:id",
      element: <GameDetails></GameDetails>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
