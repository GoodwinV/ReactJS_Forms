import React, {Component} from 'react';

import logo from '../logo.svg';

class ModalWindow extends Component {
    renderModal = () => {
        if (this.props.editPage) {
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.props.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-center">
                        <img src={logo} className="modal__logo w-100 mb-2 mt-2" alt="logo"/>
                        <span className="font-weight-bold">Well done! </span>You successfully edited your profile!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="modal__btn btn" onClick={this.props.closeModal}>OK</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={logo} className="modal__logo w-100 mb-2" alt="logo"/>
                    </div>
                    <div className="modal-body">
                        <span className="font-weight-bold">Well done! </span>You successfully logged in.
                        Redirecting...
                    </div>
                </div>
            )
        }
    };

    render() {
        return (
            <div>
                <div className="modal fade show">
                    <div className="modal-dialog modal-dialog-centered">
                        {this.renderModal()}
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </div>
        )
    }
}

export default ModalWindow;