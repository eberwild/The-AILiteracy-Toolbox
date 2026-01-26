import { Route , Routes } from 'react-router-dom';
import InfoPage from './pages/InfoPage'
import './styles/App.css'

function App() {

  return (
    <>
      <Routes>
            <Route  path='/' 
                      element={<InfoPage/>} />
           {/* <Route path='/register'
                       element={<RegisterPage/>} />
            <Route path='/login'
                      element={<LoginPage/>} />
            <Route path='/blackboard'
                   element={<BlackboardPage/>} />
            <Route  path='/tools'
                      element={<ToolsPage/>} />
            <Route  path='/about-us'
                      element={<AboutUsPage/>} />
            <Route path='/contact'
                      element={<ContactPage/>} /> */}
        </Routes> 
    </>
  )
}

export default App
