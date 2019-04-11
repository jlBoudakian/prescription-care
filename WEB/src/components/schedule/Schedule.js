import React, { Component } from 'react';
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';

class Schedule extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div class="content">

                    {/* Start Page Header */}
                    <div class="page-header">
                        <h1 class="title">Home</h1>
                        <ol class="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/medicines">Medicines</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                        </ol>
                    </div>
                    {/* End Page Header */}

                    {/* START CONTAINER */}
                    <div class="container-default">

                        <div class="calendar-layout clearfix">

                            <div class="col-md-2">

                                <div id='external-events'>
                                    <h6 class="font-title"><i class="fa fa-arrows"></i> DRAGGABLE EVENTS</h6>
                                    <p>Drag into calendar</p>
                                    <div class='fc-event'>Meeting with Developer Team</div>
                                    <div class='fc-event'>Office Party</div>
                                    <div class='fc-event'>March Invoices</div>
                                    <div class='fc-event'>Call John</div>
                                    <div class='fc-event'>Dinner with Team</div>
                                    <div class='fc-event'>Design an iOS App</div>
                                    <div class='fc-event'>Make a Sandwich</div>
                                    <div class='fc-event'>Meeting with Customers</div>


                                </div>

                            </div>

                            <div class="col-md-10">
                                <div id='calendar'></div>
                            </div>






                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                    </div>
                    {/* END CONTAINER */}

                    <Footer />
                </div>
            </div>
        )
    }
}


export default Schedule;