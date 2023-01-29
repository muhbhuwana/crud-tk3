import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useLocation
  } from "react-router-dom";
import Produk from './components/produk/produk'

function ShippingScreen() {
    return <div className="page">Shipping</div>;
  }

function Routes2() {
    return (
       <BrowserRouter>
       <Routes>
       <Route path="/produk" element={ <Produk /> } />
       <Route path="/shipping" element={<ShippingScreen />} />
       </Routes>
     </BrowserRouter>
    );
}
export default Routes2;