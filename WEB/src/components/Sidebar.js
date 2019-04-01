import React, { Component } from "react";
import "../../css/roots.css";

class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar clearfix">

                <ul class="sidebar-panel nav">
                    <li class="sidetitle">MAIN</li>
                    <li><a href="index.html"><span class="icon color5"><i class="fa fa-home"></i></span>Dashboard<span class="label label-default">2</span></a></li>
                    <li><a href="mailbox.html"><span class="icon color6"><i class="fa fa-envelope-o"></i></span>Mailbox<span class="label label-default">19</span></a></li>
                    <li><a href="#"><span class="icon color7"><i class="fa fa-flask"></i></span>UI Elements<span class="caret"></span></a>
                        <ul>
                            <li><a href="icons.html">Icons</a></li>
                            <li><a href="tabs.html">Tabs</a></li>
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="panels.html">Panels</a></li>
                            <li><a href="notifications.html">Notifications</a></li>
                            <li><a href="modal-boxes.html">Modal Boxes</a></li>
                            <li><a href="progress-bars.html">Progress Bars</a></li>
                            <li><a href="others.html">Others<span class="label label-danger">NEW</span></a></li>
                        </ul>
                    </li>
                </ul>


            </div>
        );
    }
}

export default Sidebar;