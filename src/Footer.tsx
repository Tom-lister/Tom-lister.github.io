import './Footer.css';
import home from './assets/home.png';
import search from './assets/search.png';
import boing from './assets/boing.png';
import bell from './assets/notifications.png';
import chat from './assets/chat.png';

function Footer() {
    return (
        <div id='footer'>
            <div id="lower-divider"></div>
            <div id="lower-options">
                <img src={home} />
                <img src={search} />
                <img src={boing} />
                <img src={bell} />
                <img src={chat} />
            </div>
        </div>
    )
}

export default Footer;