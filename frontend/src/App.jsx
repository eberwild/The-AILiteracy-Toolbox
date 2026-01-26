import { Route , Routes } from 'react-router-dom';
import InfoPage from './pages/InfoPage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import './styles/App.css'

function App() {

  return (
    <>
      <Routes>
            <Route  path='/' 
                      element={<InfoPage/>} />
            <Route path='/register'
                       element={<RegisterPage/>} />
            <Route path='/login'
                      element={<LoginPage/>} />
            <Route path='/home'
                      element={<HomePage/>} />
            {/*}<Route path='/blackboard'
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

export default App;
