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
                <div className="content">

                    {/* Start Page Header */}
                    <div className="page-header">
                        <h1 className="title">Home</h1>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/medicines">Medicines</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                        </ol>
                    </div>
                    {/* End Page Header */}

                    {/* START CONTAINER */}
                    <div className="container-default">

                        <div className="calendar-layout clearfix">

                            <div className="col-md-2">

                                <div id='external-events'>
                                    <h6 className="font-title"><i className="fa fa-arrows"></i> DRAGGABLE EVENTS</h6>
                                    <p>Drag into calendar</p>
                                    <div className='fc-event'>Meeting with Developer Team</div>
                                    <div className='fc-event'>Office Party</div>
                                    <div className='fc-event'>March Invoices</div>
                                    <div className='fc-event'>Call John</div>
                                    <div className='fc-event'>Dinner with Team</div>
                                    <div className='fc-event'>Design an iOS App</div>
                                    <div className='fc-event'>Make a Sandwich</div>
                                    <div className='fc-event'>Meeting with Customers</div>


                                </div>

                            </div>

                            <div className="col-md-10">
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