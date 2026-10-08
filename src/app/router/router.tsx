import { createBrowserRouter } from "react-router-dom";

import App from "@/src/app/App";
import { AfishaPage } from "@/src/pages/afisha";
import { MoviePage } from "@/src/pages/movie";
import { SessionPage } from "@/src/pages/session";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AfishaPage />,
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
      {
        path: "sessions/:sessionId",
        element: <SessionPage />,
      },
    ],
  },
]);
