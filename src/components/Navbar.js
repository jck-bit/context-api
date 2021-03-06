import React, { Component } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
  render() {
    return ( 
        <AuthContext.Consumer>{(authcontext) =>(
            <ThemeContext.Consumer>{(themecontext) =>{
                const {isAuthenticated, toggleAuth} = authcontext;
                const { isLightTheme, light, dark } = themecontext;
                const theme = isLightTheme ? light : dark;

                return(
                 <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                        {isAuthenticated? 'Logged in' : 'Logged out'}
                    </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                 </nav>
                )
            }}
            </ThemeContext.Consumer>
        )}
      
        </AuthContext.Consumer>
   
    );
  }
}
 
export default Navbar;