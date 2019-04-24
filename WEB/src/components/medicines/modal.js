import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';


class ModalMedicine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            quantity: this.props.quantity,
            dosage: this.props.dosage,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeDosage = this.handleChangeDosage.bind(this);
    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    }

    componentWillMount() {
        axios.get('localhost:8080/api/users', { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            });
    }


    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeQuantity(event) {
        this.setState({ quantity: event.target.value });

    }

    handleChangeDosage(event) {
        this.setState({ dosage: event.target.value });
    }

    render() {
        return (
            <div className="modal" id="myModal" tabIndex="-1" role="dialog" aria-hidden="true" >
                <div className="modal-dialog" style={{ width: "50%" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">New Medicine</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="input1" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="input1" value={this.state.name} onChange={this.handleChangeName} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input2" className="form-label">Quantity</label>
                                        <input type="text" maxLength="3" className="form-control" id="input2" value={this.state.quantity} onChange={this.handleChangeQuantity} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input3" className="form-label">Dosage</label>
                                        <input type="text" className="form-control" id="input3" value={this.state.dosage} onChange={this.handleChangeDosage} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="form-label">Picture</label>
                                        <input type="file" className="form-control" id="input4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={(e) => this.props.handleSave(e, this.state)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ModalMedicine;