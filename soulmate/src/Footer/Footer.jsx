import React from 'react';
import { Route, Link} from 'react-router-dom';
import Terms from './Terms';
import Privacy from './Privacy';
import ContactUs from './ContactUs';
import Nav from '../Nav';


function Footer(props) {
    return (
       
        <div>
            <div className="terms" ><Link to="/terms">terms</Link></div>
            <div className="privacy" ><Link  to="/privacy">privacy</Link></div>
            <div className="contactus" ><Link  to="/contact-us">contact us</Link></div>
            </div>
    )
}

export default Footer;