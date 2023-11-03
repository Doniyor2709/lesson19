import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AdminLayout from "./components/Layout";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/"
          element={isAuthenticated ? <AdminLayout /> : <Navigate to="/login" />}
        >
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
