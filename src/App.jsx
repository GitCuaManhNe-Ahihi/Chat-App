import reactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ChatRoom from './components/chatroom/ChatRoom'
import Login from './components/login/Login'
import Modals from './components/modals/Modals'
import AppProvider from './Context/AppProvider'
import AuthProvider from './Context/AuthProvider'
function App() {
 const modals =document.getElementById('modals')
  return (
  
    <div className='App'>
      <Router>
      <AuthProvider>
        <AppProvider>
       <Routes>
       <Route path="/" element = {<Login></Login>} />
       <Route path="/home" element ={<ChatRoom></ChatRoom>} />
       </Routes>
       <Modals></Modals>
       </AppProvider>
       </AuthProvider>
     </Router>
     {reactDom.createPortal(<ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      ></ToastContainer>,document.getElementById('toast'))}
    </div>
    
     
  )
}

export default App
