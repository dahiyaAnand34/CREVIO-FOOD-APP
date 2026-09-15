import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './Nav.jsx';
import Nav2 from './Nav2.jsx';
import Order from './pages2/Order.jsx';

import {Routes,Route } from 'react-router-dom';

function App(){
  return(
    <>
    <Nav/>
    <Nav2/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/story' element={<Story/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/order' element={<Order/>}></Route>
</Routes>

    </>
  )
}
export default App;