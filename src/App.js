import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import Produk from "./components/produk/produk";
import TambahProduk from "./components/produk/tambahproduk";
import Login from "./components/login/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/produk" element={<Produk />} />
        <Route path="/addproduk" element={<TambahProduk />} />
      </Routes>
    </BrowserRouter>
  );
}