import React, {Component} from 'react';

import ErrorBlock from "./ErrorBlock";
import ModalWindow from "./ModalWindow";
import InputField from "./InputField";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.loggedIn,

            /* hardcoded for test */
            hardcodedUsername: 'admin',
            hardcodedPassword: '123456',
            /* ------------------ */

            username: '',
            password: '',
            showErrorBlock: false,
            isCriticalError: false,
            errorBlockText: null
        };
    }

    componentDidMount() {
        if (this.props.history.action === 'REPLACE') {
            this.setState({
                showErrorBlock: true,
                isCriticalError: true,
                errorBlockText: "Sorry, you can't visit 'Edit Profile' page until you logged in"
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm = (event) => {
        event.preventDefault();

        if (
            this.state.username === this.state.hardcodedUsername
            && this.state.password === this.state.hardcodedPassword
        ) {
            this.setState({
                showErrorBlock: false,
            });

            this.props.changeState(true);

            setTimeout(() => {
                this.props.history.push("/edit-profile");
            }, 3000);

        } else if (this.state.username.length > 0 && this.state.password.length > 0) {
            this.setState({
                showErrorBlock: true,
                isCriticalError: true,
                errorBlockText: "Wrong username or password"
            });
        } else {
            this.setState({
                showErrorBlock: true,
                isCriticalError: false,
                errorBlockText: "You did not enter a username or a password."
            });
        }
    };

    /* method for testing */
    justEnter = (event) => {
        event.preventDefault();
        this.setState({
            showErrorBlock: false,
            username: this.state.hardcodedUsername,
            password: this.state.hardcodedPassword
        });
    };

    render() {
        return (
            <div className="form">
                <h1 className="form__title text-center mb-3">Log In</h1>
                { this.state.showErrorBlock ? <ErrorBlock
                    isCriticalError={this.state.isCriticalError}
                    errorText={this.state.errorBlockText}
                /> : null }
                <form>
                    <InputField id={'username'} type={'text'} value={this.state.username} onChange={this.handleChange}/>
                    <InputField id={'password'} type={'password'} value={this.state.password} onChange={this.handleChange}/>

                    <button type="submit" className="form__btn btn btn-block" onClick={this.validateForm}>
                        Log In
                    </button>
                    <button type="submit" className="form__btn btn btn-block" onClick={this.justEnter}>
                        Use test user credentials
                    </button>
                </form>
                { this.props.loggedIn ? <ModalWindow /> : null }
            </div>
        );
    }
}

export default LoginForm;