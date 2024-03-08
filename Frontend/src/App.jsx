import './App.css'
import Login from './Components/Pages/Login/Login'
import SignUp from './Components/Pages/SignUp/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Todo from './Components/Pages/Todopage/Todo'


function App() {
  return (
  <>
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/' element={<Todo></Todo>}></Route>
      </Routes>
    </Router>
  </div>
    </>
  )
}

export default App
