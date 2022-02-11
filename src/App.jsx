import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path={"/detail/:id"}
          element={
            <Layout>
              <Detail />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
