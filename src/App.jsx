import './App.css'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import Home from './Page/Home'
import RootLayOut from './componant/RootLayOut'
import TopUpItem from './Page/TopUpItem'
import Order from './Page/Order'
import Loginpage from './Page/Loginpage'

function App() {
  let Router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/TopUpItem' element={<TopUpItem/>}></Route>
    <Route path='/Order' element={<Order/>}></Route>
    <Route path='/Login' element={<Loginpage/>}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={Router}/>
  )
}

export default App
