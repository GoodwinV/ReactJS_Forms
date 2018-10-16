import React, {Component} from 'react';

import ErrorBlock from "./ErrorBlock";
import ModalWindow from "./ModalWindow";
import InputField from "./InputField";

const initialState = {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',

    showErrorBlock: false,
    isCriticalError: false,
    errorBlockText: null,
    showSuccessModal: false
};

class EditProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm = (event) => {
        event.preventDefault();

        if (this.state.firstName.length > 0
            && this.state.password.length > 0
            && this.state.repeatPassword.length > 0
            && this.state.password === this.state.repeatPassword
        ) {
            this.setState({
                showErrorBlock: false,
                showSuccessModal: true
            });

        } else if (this.state.password !== this.state.repeatPassword) {
            this.setState({
                showErrorBlock: true,
                isCriticalError: true,
                errorBlockText: "Passwords don't match"
            });
        } else {
            this.setState({
                showErrorBlock: true,
                isCriticalError: false,
                errorBlockText: "Please fill in all required fields"
            });
        }
    };

    resetForm = (event) => {
        event.preventDefault();
        this.setState(initialState);
    };

    render() {
        return (
            <div className="form">
                <h1 className="form__title text-center mb-3">Edit Profile</h1>
                { this.state.showErrorBlock ? <ErrorBlock
                    isCriticalError={this.state.isCriticalError}
                    errorText={this.state.errorBlockText}
                /> : null }
                <form>
                    <InputField id={'firstName'} label={'First name'} type={'text'} value={this.state.firstName} onChange={this.handleChange} required={true}/>
                    <InputField id={'lastName'} label={'Last name'} type={'text'} value={this.state.lastName} onChange={this.handleChange}/>
                    <InputField id={'password'} label={'Password'} type={'password'} value={this.state.password} onChange={this.handleChange} required={true}/>
                    <InputField id={'repeatPassword'} label={'Repeat password'} type={'password'} value={this.state.repeatPassword} onChange={this.handleChange} required={true}/>

                    <div className="form__btnGroup">
                        <button type="submit" className="form__btn btn" onClick={this.validateForm}>
                            Save
                        </button>
                        <button type="submit" className="form__btn btn" onClick={this.resetForm}>
                            Cancel
                        </button>
                    </div>
                </form>
                { this.state.showSuccessModal ? <ModalWindow editPage={true} closeModal={this.resetForm} /> : null }
            </div>
        );
    }
}

export default EditProfileForm;