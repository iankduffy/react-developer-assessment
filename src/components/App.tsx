import { Home } from "./homepage";
import { Layout } from "./shared/layout";
import { PostPage } from "./post-page";

import {
  createBrowserRouter,
  RouterProvider,
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
    element: <PostPage/>,
    loader: async ({ params }) => {
      const response = await fetch(`/api/post/${params.id}`)
      const postData = await response.json()

      return postData ? postData : null
    },
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
