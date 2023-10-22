import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <></>
    </RouterProvider>
  );
}

export default App;
