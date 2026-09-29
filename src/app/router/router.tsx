import { createBrowserRouter } from "react-router-dom";

import App from "@/src/app/App";
import { AfishaPage } from "@/src/pages/afisha";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AfishaPage />,
      },
    ],
  },
]);
