import React, { Component } from 'react';
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';

class HomePage extends Component {
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


export default HomePage;