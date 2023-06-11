import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import AboutPage from "./pages/AboutUs/AboutPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SignIn from "./pages/Sign-In/SignIn";
import SignUp from "./pages/Sign-Up/SignUp";
import Admin from "./pages/Admin/Admin";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
