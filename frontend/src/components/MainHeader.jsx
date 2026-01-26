import { NavLink } from 'react-router';
import '../styles/MainHeader.css';

function MainHeader() {

    return(
        <>
            <div className="main-header">
                <NavLink to='/' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Info
                </NavLink>
                <NavLink to='/home' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Home
                </NavLink>
                <NavLink to='/blackboard' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Blackboard
                </NavLink>
                <NavLink to='/tools' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Tools
                </NavLink>
                <NavLink to='/about-us' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    About Us
                </NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Contact
                </NavLink>
            </div>
        </>
    )
}

export default MainHeader;