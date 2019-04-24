import React, { Component } from "react";

class Login extends Component {
    render() {
        return (

            <div className="login-form">
                <form action="/">
                    <div className="top">
                        <img src="./img/logoIMG.png" alt="icon" className="icon" />
                        <h1>PrescriptionCare</h1>
                        <h4>What the doctor ordered!</h4>
                    </div>
                    <div className="form-area">
                        <div className="group">
                            <input type="text" className="form-control" placeholder="Username" />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="group">
                            <input type="password" className="form-control" placeholder="Password" />
                            <i className="fa fa-key"></i>
                        </div>
                        <div className="checkbox checkbox-primary">
                            <input id="checkbox101" type="checkbox" checked />
                            <label for="checkbox101"> Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-default btn-block">LOGIN</button>
                    </div>
                </form>
                <div className="footer-links row">
                    <div className="col-xs-6"><a href="/register"><i className="fa fa-external-link"></i> Register Now</a></div>
                    <div className="col-xs-6 text-right"><a href="#"><i className="fa fa-lock"></i> Forgot password</a></div>
                </div>
            </div>
        )
    }
}

export default Login;