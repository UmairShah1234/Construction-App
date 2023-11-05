import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import ResidentialProjects from "./pages/ResidentialProjects";
import CommercialProjects from "./pages/CommercialProjects";
import IndividualProject from "./components/IndividualProject";
import ContactUs from "./pages/ContactUs";

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
        path: '/residential-projects',
        element: <ResidentialProjects />,
      },
      {
        path: '/commercial-projects',
        element: <CommercialProjects />,
      },
      {
        path: '/:project_name',
        element: <IndividualProject />,
      },
      
      {
        path: "/contact-us",
        element: <ContactUs />,
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
