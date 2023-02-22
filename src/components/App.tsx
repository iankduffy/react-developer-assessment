import { Home } from "./homepage";
import { Layout } from "./shared/layout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/post/:id",
    element: <div>About</div>,
  },
])

const App: React.FC = () => {
  return (
    <Layout>
       <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
