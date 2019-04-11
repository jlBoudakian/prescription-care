import React, { Component } from "react";


class Header extends Component {
    render() {
        return (
            <div id="top" class="clearfix">

                <div class="applogo">
                    <a href="/home" class="logo">PrescriptionCare</a>
                </div>
                <a href="#" class="sidebar-open-button"><i class="fa fa-bars"></i></a>
                <a href="#" class="sidebar-open-button-mobile"><i class="fa fa-bars"></i></a>
                <a href="#sidepanel" class="sidepanel-open-button"><i class="fa fa-outdent"></i></a>

            </div>
        )
    }
}



export default Header;