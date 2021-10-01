import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Header.css';
import { useState } from 'react';

function Header() {

    const [settingModal, setSettingModal] = useState(false);   

    const toggleModalSetting = () => {
        if (settingModal === false) {
          setSettingModal(true);
        }
        if (settingModal === true) {
          setSettingModal(false);
        }
      };

      
    return (
        <> 
        < header > 
          <div className="header">
             <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                CORINI-HUB
             </Link>
          <div className="signup">
             <button className="Login">Login</button>
             <button className="Sign Up">SignUp</button>
          </div>
          </div>
    </header>
</>
    );
}

export default Header;