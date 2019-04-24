import React, { Component } from 'react';
import Header from '../base/Header';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';
import ModalMedicine from './modal';


class Medicines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: "",
            quantity: 0,
            dosage: "",
        };
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleShowModal() {
        console.log('passou')
        this.setState({
            showModal: true
        });
    }

    handleHideModal() {
        this.setState({
            showModal: false
        });
    }

    handleSave(event, data) {
        event.preventDefault();
        console.log(data);

    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content">
                    {/* Start Page Header */}
                    <div className="page-header">
                        <h1 className="title">Medicines</h1>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/medicines">Medicines</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                        </ol>
                    </div>
                    {/* End Page Header */}

                    {/* START CONTAINER */}
                    <div className="container-default">

                        <div className="row">
                            <div className="col-md-12">
                                <button type="button" className="btn btn-primary" onClick={this.handleShowModal}>
                                    Add new medicine
                                </button>
                            </div>
                        </div>
                        <div className="row margin-t-10">
                            <div className="col-md-12">
                                <div className="panel panel-default">

                                    <div className="panel-title">
                                        My medicines!
                                </div>

                                    <div className="panel-body">
                                        <p>List of all registered medicines.</p>

                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <td>ID</td>
                                                    <td>Name</td>
                                                    <td>Quant</td>
                                                    <td>Dosage</td>
                                                    <td>Pic</td>
                                                    <td>Action</td>
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
                                                        <div className="checkbox checkbox-primary">
                                                            <input id="checkbox102" type="checkbox" />
                                                            <label htmlFor="checkbox102"></label>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END CONTAINER */}
                    <Footer />
                    {this.state.showModal ?
                        <ModalMedicine
                            handleHideModal={this.handleHideModal}
                            handleSave={this.handleSave}
                            name={this.state.name}
                            quantity={this.state.quantity}
                            dosage={this.state.dosage}
                        /> : null}
                </div>
            </div>
        )
    }
}



export default Medicines;