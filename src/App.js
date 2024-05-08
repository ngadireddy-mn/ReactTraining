import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { Button } from 'antd'
import NavBar from './NavBar';
import Cakelist from './Cakelist';
import CarouselComp from './CarouselComp';
import Userslist from './Userslist';
import Signup from './Signup';
import Attendance from './Attendance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CakeDetails from './CakeDetails';
import Search from './Search';
import Checkout from './Checkout';
import A from './A';
import Address from './Address';
import PageNotFound from './PageNotFound';
import Admin from './Admin';
import Cart from './Cart';
function App() {
  var name = "Nihitha"
  var money = "1000";
  // return(
  //   <>
  //   <A data={money}></A>
  //   </>
  // )
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
      <CarouselComp></CarouselComp>
      <Routes>
        <Route path="/Home" element={<Cakelist/>}></Route>
        <Route path="/" element={<Cakelist/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>   
        <Route path="/Search" element={<Search/>}></Route>   
        <Route path="/checkout" element={<Checkout/>}>
          <Route path="address" element={<Address/>}/>
          </Route>   
        <Route path="/cake/:cakeid" element={<CakeDetails/>}></Route>   
        <Route path="/cart" element={<Cart/>}></Route>    
        <Route path="/*" element={<PageNotFound/>}></Route>        
      </Routes>
      </BrowserRouter>
      {/* <NavBar></NavBar> */}      
      {/* <Attendance></Attendance> */}
      {/* <Cakelist></Cakelist> */}
      {/* <Login></Login> */}

      {/* <label>{name}</label>
      <Button>ANTD button</Button> */}
    </div>
  );
}

export default App;
