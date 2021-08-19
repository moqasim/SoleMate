import React from 'react';
import { Route } from 'react-router-dom';
import Terms from './Terms';
import Privacy from './Privacy';
import ContactUs from './ContactUs';
import Nav from '../Nav';

function Footer(props) {
    return (
       
        <section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <hr />
        
            <section>
                <Route exact path="/privacy" render={Privacy} />
            </section>
            
            <section>
            <Route exact path="/terms" render={Terms} />
            </section>

            <section>
                <Route exact path="/contact-us" render={ContactUs} />
            </section>
        </section>
            
       
    );
}

export default Footer;