import { Route, Routes } from 'react-router-dom'
import ListOfStudents from './components/List-of-students'
import Register from "./components/Register"
import Signin from "./components/Signin"
import Nav from './components/Nav'


function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<ListOfStudents />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />

    </Routes>

    {/* <ListOfStudents/> */}

      
    </>
  )
}

export default App
