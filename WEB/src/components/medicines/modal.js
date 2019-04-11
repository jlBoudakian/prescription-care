import React from 'react';



class modalMedicine extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            < div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Basic Modal</h4>
                        </div>
                        <div class="modal-body">
                            ...
            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default">Save changes</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default modalMedicine;