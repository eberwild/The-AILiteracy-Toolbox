import { Route , Routes } from 'react-router-dom';
import InfoPage from './pages/InfoPage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UnderstandingAI from './pages/pillar-pages/UnderstandingAI';
import CriticalThinking from './pages/pillar-pages/CriticakThinking';
import PracticalSkills from './pages/pillar-pages/PracticalSkills';
import Ethics from './pages/pillar-pages/Ethics';
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
            <Route path='/understandingAI'
                      element={<UnderstandingAI/>} />
            <Route path='/criticalThinking'
                      element={<CriticalThinking/>} />
            <Route path='/practicalSkills'
                      element={<PracticalSkills/>} />
            <Route path='/ethics'
                      element={<Ethics/>} />
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
