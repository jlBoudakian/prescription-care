import React, { Component } from "react";


class Header extends Component {
    render() {
        return (
            <div id="top" className="clearfix">

                <div className="applogo">
                    <a href="/home" className="logo">PrescriptionCare</a>
                </div>
                <a href="#" className="sidebar-open-button"><i className="fa fa-bars"></i></a>
                <a href="#" className="sidebar-open-button-mobile"><i className="fa fa-bars"></i></a>
                <a href="#sidepanel" className="sidepanel-open-button"><i className="fa fa-outdent"></i></a>

            </div>
        )
    }
}



export default Header;