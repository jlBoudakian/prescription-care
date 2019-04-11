import React, { Component } from 'react';
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';


class Medicines extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div class="content">

                    {/* Start Page Header */}
                    <div class="page-header">
                        <h1 class="title">Medicines</h1>
                        <ol class="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/medicines">Medicines</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                        </ol>
                    </div>
                    {/* End Page Header */}

                    {/* START CONTAINER */}
                    <div class="container-default">

                        <div class="row">
                            <div class="col-md-12">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                    Launch demo modal
                            </button>
                            </div>
                        </div>
                        <div class="row margin-t-10">
                            <div class="col-md-12">
                                <div class="panel panel-default">

                                    <div class="panel-title">
                                        My medicines!
                                </div>

                                    <div class="panel-body">
                                        <p>List of all registered medicines.</p>

                                        <table class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <td>ID</td>
                                                    <td>Name</td>
                                                    <td>Quant</td>
                                                    <td>Dosage</td>
                                                    <td>Pic</td>
                                                    <td>Active</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td># <b>9652</b></td>
                                                    <td>Kode Gaming Laptop</td>
                                                    <td>John Doe</td>
                                                    <td>12/10/2015</td>
                                                    <td>As we got further and further away, it [the Earth] diminished in size.</td>
                                                    <td>
                                                        <div class="checkbox checkbox-primary">
                                                            <input id="checkbox102" type="checkbox" />
                                                            <label for="checkbox102"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td># <b>1963</b></td>
                                                    <td>New Season Jacket</td>
                                                    <td>Jane Doe</td>
                                                    <td>12/10/2015</td>
                                                    <td>As we got further and further away, it [the Earth] diminished in size.</td>
                                                    <td>Paypal</td>
                                                </tr>
                                                <tr>
                                                    <td># <b>9652</b></td>
                                                    <td>IO Mouse</td>
                                                    <td>Jonathan Doe</td>
                                                    <td>12/10/2015</td>
                                                    <td>As we got further and further away, it [the Earth] diminished in size.</td>
                                                    <td>Credit Card</td>
                                                </tr>
                                                <tr>
                                                    <td># <b>9651</b></td>
                                                    <td>Doe Bike</td>
                                                    <td>Jonathan Doe</td>
                                                    <td>12/10/2015</td>
                                                    <td>As we got further and further away, it [the Earth] diminished in size.</td>
                                                    <td>Credit Card</td>
                                                </tr>
                                                <tr>
                                                    <td># <b>6962</b></td>
                                                    <td>Zets Baseball Bat</td>
                                                    <td>Jonathan Doe</td>
                                                    <td>12/10/2015</td>
                                                    <td>As we got further and further away, it [the Earth] diminished in size.</td>
                                                    <td>Credit Card</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
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



export default Medicines;