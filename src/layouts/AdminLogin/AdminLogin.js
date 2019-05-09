import React, { Component } from 'react';

import './style.css'

class AdminLogin extends Component {

    processingQuery = e => {
        e.preventDefault();
        
    }

    render() {
        return(
            <div className='container'>
                <div className='loginForm'>
                    <h3>Login</h3>
                    <input type="email" name="" placeholder='E-mail'/>
                    <input type="password" name="" placeholder='Password' />
                    <input 
                        type='submit'
                        onClick={this.processingQuery}
                         />
                </div>
            </div>
        )
    }
}

export default AdminLogin;