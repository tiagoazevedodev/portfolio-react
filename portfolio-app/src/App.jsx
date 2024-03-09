import './App.css'
import Header from './components/Header/index.jsx'
import { Routes, Route } from 'react-router-dom'
import { Education, Experience, Projects, Home} from './components/pages'


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/education' element={ <Education/> } />
        <Route path='/experience' element={ <Experience/> } />
        <Route path='/projects' element={ <Projects/> } />
      </Routes>
    </div>
  )
}

export default App
