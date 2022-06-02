import './App.css';
import Product2 from './pages/Product2';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Products from './Components/Products';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Pay from './pages/Pay';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  const LoggedInUser = useSelector((state) => state.user.currentUser);
  // const LoggedInUser = false
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product2 />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={LoggedInUser ? <Navigate replace to="/home" />: <Login/>} />
        
        <Route path="register" element={LoggedInUser ? <Navigate replace to="/home" />: <Register/>} />
        <Route path="pay" element={<Pay />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
