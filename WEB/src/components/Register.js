import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div class="login-form">
                <form action="index.html" >
                    <div class="top">
                        <h1>Register</h1>
                        <h4>Join to our community now !</h4>
                    </div>
                    <div class="form-area">
                        <div class="group">
                            <input type="text" class="form-control" placeholder="Username" />
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="group">
                            <input type="text" class="form-control" placeholder="E-mail" />
                            <i class="fa fa-envelope-o"></i>
                        </div>
                        <div class="group">
                            <input type="password" class="form-control" placeholder="Password" />
                            <i class="fa fa-key"></i>
                        </div>
                        <div class="group">
                            <input type="password" class="form-control" placeholder="Password again" />
                            <i class="fa fa-key"></i>
                        </div>
                        <button type="submit" class="btn btn-default btn-block">REGISTER NOW</button>
                    </div>
                </form>
                <div class="footer-links row">
                    <div class="col-xs-6"><a href="/"><i class="fa fa-sign-in"></i> Login</a></div>
                    <div class="col-xs-6 text-right"><a href="#"><i class="fa fa-lock"></i> Forgot password</a></div>
                </div>
            </div>
        )
    }
}

export default Register;