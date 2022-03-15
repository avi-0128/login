
import { Link, Route , Routes } from 'react-router-dom';
import './App.css';
import Enter from './components/Enter';
import Logout from './components/Logout';
import Email from './components/Email';
import Phone from './components/Phone';
import ChangePassword from './components/ChangePassword';




function App() {
  return(
    <>
   <nav className='navbar navbar-dark bg-dark justify-content-center '>
   <Link to='/home' className='nav-link'>Home</Link>
   </nav>
   
   <Routes>
     <Route path='/home' element={<Enter/>}/>
     <Route path='/home/email' element={<Email/>} exact/>
        <Route path='/home/phoneNumber' element={<Phone/>} exact/>
        <Route path='/home/changePassword' element={<ChangePassword/>} exact/>
   </Routes>
   
    </>
  )
}
 

export default App;
