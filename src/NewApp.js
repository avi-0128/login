
import { Link, Route , Routes } from 'react-router-dom';
import './App.css';
import Enter from './components/Enter';
import Email from './components/Email';
import Phone from './components/Phone';
import ChangePassword from './components/ChangePassword';




function NewApp() {
  return(
    <>
   <nav className='navbar navbar-dark bg-dark justify-content-center '>
   <Link to='/home' className='nav-link'>Home</Link>
   </nav>
   
   <Routes>
     <Route path='/home' element={<Enter/>}>
      <Route path='/home/email' element={<Email/>} />
      <Route path='/home/phoneNumber' element={<Phone/>} />
      <Route path='/home/changePassword' element={<ChangePassword/>} />
     </Route>
     
   </Routes>
   
    </>
  )
}
 

export default NewApp;
