import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Signup } from "../pages/Signup"
import { Signin } from "../pages/Signin"
import { SendMoney } from "../pages/SendMoney"
import { Dashboard } from "../pages/Dashboard"; 


function App() {

  return (
   
    <BrowserRouter>
      <Routes>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/signin" element={<Signin/>}></Route>
         <Route path="/send" element={<SendMoney/>}></Route>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
    
  
}
export default App;