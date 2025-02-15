import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Главное from "./pages/Главное";
import Интересное from "./pages/Интересное";
import Экономика from "./pages/Экономика";
import Войти from "./pages/Войти";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Главное />,
        },
        {
          path: "/Интересное",
          element: <Интересное />,
        },
        {
          path: "/Экономика",
          element: <Экономика />,
        },
        {
          path: "/Войти",
          element: <Войти />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
