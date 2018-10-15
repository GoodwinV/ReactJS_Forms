import React, {Component} from 'react';
import logo from './logo.svg';
import './css/style.css';

import LoginForm from './components/LoginForm';
import EditProfileForm from './components/EditProfileForm';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    handleStateChange = value => {
        this.setState({
            isLoggedIn: value
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <div className="navbar navbar-expand flex-column flex-md-row sticky-top">
                        <a className="navbar-brand" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="185.9483032" height="60" viewBox="0 0 185.9483032 60">
                            <g>
                                <path
                                    d="M35.437 28.627c.365-.044.715-.045 1.036 0 .186-.427.218-1.162.051-1.962-.249-1.19-.585-1.91-1.28-1.798s-.721.974-.472 2.164c.14.669.389 1.242.666 1.596h-.001z"></path>
                                <g>
                                    <path
                                        d="M29.468 29.569c.498.218.803.363.923.237.077-.079.054-.229-.065-.423-.245-.401-.751-.807-1.286-1.036-1.096-.472-2.403-.315-3.411.41-.333.244-.648.582-.603.787.015.066.064.116.181.133.274.031 1.233-.453 2.338-.521.78-.048 1.426.196 1.923.414v-.001z"></path>
                                    <path
                                        d="M28.467 30.14c-.648.102-1.005.316-1.235.515-.196.171-.317.36-.316.493l.05.118.107.041c.146 0 .474-.131.474-.131.902-.323 1.497-.284 2.086-.217.326.037.48.057.551-.055.021-.032.047-.101-.018-.207-.152-.246-.806-.662-1.698-.556l-.001-.001z"></path>
                                </g>
                                <g>
                                    <path
                                        d="M28.744 31.014c.186-.426.199-1.436.032-2.237-.248-1.19-.623-1.87-1.318-1.758-.695.112-.713 1.071-.489 2.266.141.752.428 1.265.591 1.536.553.823.928.61 1.183.193h.001z"></path>
                                </g>
                                <path
                                    d="M33.422 32.236c.44.216.924.131 1.082-.19.158-.321-.071-.756-.511-.972-.44-.216-.924-.131-1.082.19-.158.321.071.756.511.972z"></path>
                                <path
                                    d="M36.25 29.765c-.357-.006-.654.386-.662.877-.008.49.275.892.632.898s.654-.386.662-.876-.275-.892-.632-.899z"></path>
                                <path
                                    d="M12.243 38.603c-.089-.111-.235-.077-.376-.045-.099.023-.211.049-.333.047-.263-.005-.486-.117-.611-.309-.163-.25-.153-.623.026-1.05l.084-.191c.287-.643.766-1.72.228-2.745-.405-.772-1.067-1.253-1.862-1.354-.763-.097-1.549.186-2.05.739-.791.872-.914 2.059-.761 2.479.056.154.144.196.207.205.135.018.333-.08.458-.415l.036-.109c.056-.177.159-.507.328-.772.204-.319.522-.539.896-.619.38-.081.769-.009 1.094.204.554.363.767 1.041.531 1.689-.122.335-.321.975-.277 1.501.089 1.065.744 1.493 1.332 1.538.572.022.972-.3 1.073-.535.06-.139.009-.223-.023-.26v.002z"></path>
                                <path
                                    d="M45.269 36.655c-.022-.077-.164-.596-.359-1.221l-.397-1.065c.782-1.171.796-2.218.692-2.811-.111-.735-.417-1.362-1.034-2.009-.617-.648-1.878-1.311-3.651-1.808l-.93-.258c-.005-.038-.049-2.193-.089-3.118-.029-.669-.087-1.712-.411-2.741-.386-1.392-1.058-2.609-1.898-3.388 2.317-2.401 3.763-5.047 3.759-7.316-.007-4.364-5.366-5.685-11.971-2.95l-1.399.594c-.006-.006-2.53-2.482-2.568-2.515-7.53-6.568-31.075 19.602-23.547 25.958l1.645 1.394c-.427 1.105-.594 2.372-.457 3.734.176 1.749 1.078 3.426 2.541 4.722 1.388 1.23 3.214 2.009 4.985 2.007 2.929 6.751 9.622 10.892 17.47 11.125 8.418.25 15.485-3.7 18.446-10.796.194-.498 1.016-2.742 1.016-4.723 0-1.991-1.125-2.816-1.842-2.816l-.001.001zm-34.442 5.313c-.256.044-.517.061-.78.055-2.543-.068-5.289-2.357-5.562-5.072-.302-3 1.231-5.31 3.946-5.857.324-.065.717-.103 1.14-.081 1.521.083 3.762 1.251 4.274 4.564.453 2.934-.267 5.922-3.018 6.391zm-2.839-12.669c-1.69.329-3.179 1.286-4.09 2.609-.544-.454-1.559-1.333-1.738-1.675-1.454-2.761 1.587-8.129 3.711-11.16 5.25-7.492 13.472-13.162 17.279-12.134.619.175 2.668 2.551 2.668 2.551s-3.805 2.111-7.333 5.054c-4.754 3.661-8.346 8.981-10.497 14.755zm26.688 11.547c.055-.023.093-.087.087-.149-.008-.077-.077-.133-.154-.125 0 0-3.983.59-7.746-.788.41-1.332 1.5-.851 3.147-.718 2.969.177 5.63-.257 7.596-.821 1.704-.489 3.942-1.453 5.681-2.825.586 1.288.793 2.705.793 2.705s.454-.081.833.152c.358.221.621.679.442 1.865-.366 2.215-1.307 4.012-2.889 5.666-.963 1.037-2.132 1.938-3.47 2.593-.71.373-1.467.696-2.266.957-5.964 1.948-12.07-.194-14.038-4.793-.157-.346-.29-.708-.395-1.086-.839-3.031-.127-6.667 2.099-8.956v-.001c.137-.146.277-.317.277-.533 0-.181-.115-.371-.214-.506-.779-1.129-3.476-3.054-2.934-6.779.389-2.676 2.729-4.56 4.911-4.448l.553.032c.945.056 1.77.177 2.549.21 1.303.056 2.474-.133 3.861-1.289.468-.39.843-.728 1.478-.836.067-.011.233-.071.564-.055.339.018.661.111.951.304 1.112.74 1.27 2.533 1.328 3.844.033.749.123 2.56.154 3.079.071 1.189.383 1.356 1.015 1.565.356.117.686.204 1.172.341 1.472.413 2.345.833 2.896 1.371.328.337.481.694.528 1.036.174 1.267-.983 2.831-4.046 4.253-3.348 1.554-7.409 1.947-10.215 1.635l-.983-.111c-2.245-.302-3.525 2.599-2.178 4.586.868 1.281 3.233 2.114 5.599 2.115 5.425.001 9.595-2.316 11.146-4.317l.124-.177c.076-.115.013-.178-.082-.113-1.267.867-6.896 4.31-12.917 3.274 0 0-.732-.12-1.399-.38-.531-.206-1.641-.717-1.776-1.857 4.859 1.503 7.918.082 7.918.082v-.002zm-7.697-.909l.001.001.001.002-.002-.004v.001zm-9.295-20.896c1.866-2.157 4.164-4.032 6.222-5.085.071-.036.147.041.108.111-.163.296-.478.93-.578 1.41-.016.075.066.131.129.088 1.28-.873 3.508-1.808 5.462-1.928.084-.005.124.102.058.154-.297.228-.622.543-.859.862-.04.054-.002.132.065.133 1.372.01 3.306.49 4.566 1.197.085.048.025.213-.071.191-1.907-.437-5.029-.769-8.272.022-2.895.706-5.105 1.796-6.717 2.969-.081.059-.179-.048-.113-.125v.001z"></path>
                            </g>
                            <g>
                                <path
                                    d="M179.982 24.112c-2.79 0-4.068 2.092-4.624 3.283-.367.787-.349 1.018-.617 1.018-.388 0-.066-.632.108-1.376.344-1.464.082-2.582.082-2.582h-3.976v19.079h5.427v-6.049c.642 1.089 1.832 2.253 3.666 2.253 3.924 0 5.899-3.321 5.899-7.807 0-5.085-2.364-7.821-5.966-7.821l.001.002zm-1.49 12.085c-1.245 0-2.16-1.578-2.16-3.778 0-2.136.941-3.777 2.117-3.777 1.51 0 2.154 1.385 2.154 3.777 0 2.488-.593 3.778-2.111 3.778z"></path>
                                <path
                                    d="M72.109 24.112c-2.387 0-3.568 1.879-4.11 3.09-.303.677-.387 1.212-.633 1.212-.346 0-.098-.465-.381-1.496-.373-1.357-1.495-2.806-3.881-2.806-2.508 0-3.582 2.119-4.091 3.283-.348.796-.349 1.018-.617 1.018-.388 0-.066-.632.108-1.376.344-1.464.082-2.582.082-2.582h-3.976v14.95h5.427v-7.438c0-1.467.614-3.329 1.666-3.329 1.215 0 1.459.934 1.459 2.662v8.109h5.449v-7.442c0-1.306.533-3.329 1.674-3.329 1.232 0 1.451 1.311 1.451 2.662v8.105h5.351v-8.792c0-3.902-1.375-6.503-4.977-6.503l-.001.002zm92.114 0c-2.387 0-3.568 1.879-4.11 3.09-.303.677-.387 1.212-.633 1.212-.346 0-.115-.591-.381-1.496-.398-1.35-1.387-2.806-3.881-2.806-2.508 0-3.582 2.119-4.091 3.283-.348.796-.349 1.018-.617 1.018-.388 0-.066-.632.108-1.376.344-1.464.082-2.582.082-2.582h-3.976v14.95h5.427v-7.438c0-1.467.614-3.329 1.666-3.329 1.215 0 1.459.934 1.459 2.662v8.109h5.449v-7.442c0-1.306.533-3.329 1.674-3.329 1.232 0 1.451 1.311 1.451 2.662v8.105h5.351v-8.792c0-3.902-1.375-6.503-4.977-6.503l-.001.002zm-77.871.003c-4.157 0-7.14 1.528-7.14 1.528v4.493s3.294-1.894 5.966-1.894c2.133 0 2.395 1.15 2.298 2.105 0 0-.615-.163-2.492-.163-4.423 0-6.656 2.01-6.656 5.234 0 3.058 2.509 4.336 4.624 4.336 3.085 0 4.441-2.073 4.858-3.057.289-.682.342-1.142.602-1.142.296 0 .196.33.182 1.009-.025 1.189.031 2.089.22 2.846h4.09v-7.358c0-4.594-1.625-7.937-6.551-7.937h-.001zm-1.321 11.797c-1.298.3-1.97-.1-1.97-.96 0-1.178 1.219-1.65 2.958-1.65.767 0 1.488.066 1.488.066 0 .505-1.095 2.226-2.476 2.544zm16.812-15.982h5.427v19.48h-5.427v-19.48zm11.4 12.004c0-1.344 1.249-2.567 3.541-2.567 2.498 0 4.507 1.203 4.958 1.476v-5.2s-1.587-1.528-5.489-1.528c-4.113 0-7.538 2.407-7.538 7.587s3.108 8.052 7.527 8.052c3.451 0 5.509-1.896 5.509-1.896v-4.939c-.651.364-2.465 1.623-4.942 1.623-2.623 0-3.567-1.207-3.567-2.607l.001-.001zm19.493-7.819c-3.142 0-4.337 2.977-4.578 3.494s-.361.814-.558.808c-.343-.011-.104-.635.03-1.038.253-.763.788-2.763.788-5.223 0-1.668-.226-2.226-.226-2.226h-4.685v19.48h5.427v-7.438c0-1.212.483-3.329 1.851-3.329 1.132 0 1.487.839 1.487 2.529v8.239h5.427v-7.913c0-3.838-.636-7.381-4.963-7.381v-.002zm6.727.361v14.933h5.427v-14.933s-.912.534-2.708.534c-1.796 0-2.719-.534-2.719-.534z"></path>
                                <ellipse cx="142.161" cy="21.947" rx="3.322" ry="2.168"></ellipse>
                                <path d="M94.659 24.476v14.933h5.427v-14.933s-.912.534-2.708.534l-2.719-.534z"></path>
                                <ellipse cx="97.357" cy="21.947" rx="3.322" ry="2.168"></ellipse>
                            </g>
                        </svg></a>
                        <ul className="navbar-nav flex-row ml-md-auto">
                            { !this.state.isLoggedIn ?
                                <li className="nav-item"><Link className="nav-link" to="/">Log In</Link></li>
                                :
                                /* reload page to logout */
                                <li className="nav-item"><a className="nav-link" href="/">Sign Out</a></li>
                            }
                            <li className="nav-item"><Link className="nav-link" to="/edit-profile">Edit Profile</Link></li>
                        </ul>
                    </div>
                    <section className="pt-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <img src={logo} className="form__logo w-100 mb-2" alt="logo"/>
                                    <div>
                                        <Switch>
                                            <Route
                                                path="/"
                                                exact={true}
                                                render={(props) =>
                                                    <LoginForm
                                                        {...props}
                                                        loggedIn={this.state.isLoggedIn}
                                                        changeState={this.handleStateChange}
                                                    />
                                                }
                                            />
                                            <PrivateRoute loggedIn={this.state.isLoggedIn} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

function PrivateRoute(props) {
    if (props.loggedIn) {
        return <Route path="/edit-profile" component={EditProfileForm} />
    } else {
        return <Redirect to="/"/>
    }
}

export default App;
