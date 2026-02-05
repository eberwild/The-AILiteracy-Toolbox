import { NavLink } from 'react-router';
import '../styles/components/MainHeader.css';

function MainHeader() {

    return(
        <>
            <div className="main-header">
                <NavLink to='/' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Home
                </NavLink>
                <NavLink to='/pillars' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    4-Pillars
                </NavLink>
                <NavLink to='/tools' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Tools
                </NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive? 'nav-link-active' : 'nav-link'}>
                    Contact
                </NavLink>
            </div>
        </>
    )
}

export default MainHeader;