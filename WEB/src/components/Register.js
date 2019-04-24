import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="login-form">
                <form action="index.html" >
                    <div className="top">
                        <h1>Register</h1>
                        <h4>Join to our community now !</h4>
                    </div>
                    <div className="form-area">
                        <div className="group">
                            <input type="text" className="form-control" placeholder="Username" />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="group">
                            <input type="text" className="form-control" placeholder="E-mail" />
                            <i className="fa fa-envelope-o"></i>
                        </div>
                        <div className="group">
                            <input type="password" className="form-control" placeholder="Password" />
                            <i className="fa fa-key"></i>
                        </div>
                        <div className="group">
                            <input type="password" className="form-control" placeholder="Password again" />
                            <i className="fa fa-key"></i>
                        </div>
                        <button type="submit" className="btn btn-default btn-block">REGISTER NOW</button>
                    </div>
                </form>
                <div className="footer-links row">
                    <div className="col-xs-6"><a href="/"><i className="fa fa-sign-in"></i> Login</a></div>
                    <div className="col-xs-6 text-right"><a href="#"><i className="fa fa-lock"></i> Forgot password</a></div>
                </div>
            </div>
        )
    }
}

export default Register;