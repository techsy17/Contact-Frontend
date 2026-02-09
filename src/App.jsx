import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import AddContact from './AddContact'
import Home from './Home'
import EditContact from './EditContact'

function App() {

  return (
    <div className="app">

      <Navbar />

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact/>}/>

      </Routes>

    </div>
  )
}

export default App
