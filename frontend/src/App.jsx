import { Route , Routes } from 'react-router-dom';
// components
import ScrollToTop from './components/ScrollToTop';
// main pages
import InfoPage from './pages/main-pages/InfoPage';
import HomePage from './pages/main-pages/HomePage';
import BlackboardPage from './pages/main-pages/BlackboardPage';
import ToolsPage from './pages/main-pages/ToolsPage';
import ContactPage from './pages/main-pages/ContactPage';
// side pages
import RegisterPage from './pages/side-pages/RegisterPage';
import LoginPage from './pages/side-pages/LoginPage';
import AddToolPage from './pages/side-pages/AddToolPage';
// pillar pages
import PillarPage from '../src/pages/main-pages/PillarPage';
import UnderstandingAI from './pages/pillar-pages/UnderstandingAI';
import CriticalThinking from './pages/pillar-pages/CriticakThinking';
import PracticalSkills from './pages/pillar-pages/PracticalSkills';
import Ethics from './pages/pillar-pages/Ethics';
// style
import './styles/App.css';


function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
            <Route  path='/' 
                      element={<InfoPage/>} />
            <Route path='/register'
                       element={<RegisterPage/>} />
            <Route path='/login'
                      element={<LoginPage/>} />
            <Route path='/home'
                      element={<HomePage/>} />
            <Route path='/pillars'
                      element={<PillarPage/>} />
            <Route path='/understandingAI'
                      element={<UnderstandingAI/>} />
            <Route path='/criticalThinking'
                      element={<CriticalThinking/>} />
            <Route path='/practicalSkills'
                      element={<PracticalSkills/>} />
            <Route path='/ethics'
                      element={<Ethics/>} />
            <Route path='/blackboard'
                   element={<BlackboardPage/>} />
            <Route  path='/tools'
                      element={<ToolsPage/>} />
            <Route path='/add-tool'
                      element={<AddToolPage/>} />
            <Route path='/contact'
                      element={<ContactPage/>} />
        </Routes> 
    </>
  )
}

export default App;
