import './Header.css';
import logo from './assets/top_logo.png';
import settings from './assets/settings.png';

function Header({pfp} : {pfp : string}) {
    return (
        <div id='header'>
            <img id="mainpfp" src = {"/public/pfps/"+pfp} />
            <img id="logo" src = {logo} />
            <img id="settings" src = {settings} />
            <div id="upper-divider"></div>
        </div>
    )
}

export default Header;