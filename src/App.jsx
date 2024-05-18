import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import { UrlContextProvider } from "./contexts/UrlContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>,
    ),
  );
  return (
    <UrlContextProvider>
      <RouterProvider router={router} />
    </UrlContextProvider>
  );
}

export default App;
