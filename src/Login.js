import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Auth from './Auth';

const auth = Auth;

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        auth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={this.login}>Log in</button>
        </div>
        );
    }
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={props =>
            auth.isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: props.location }
                }}
            />
            )
        }
        />
    );
}
  
const AuthButton = withRouter(
    ({ history }) =>
    auth.isAuthenticated ? (
        <p>
        Welcome!{" "}
        <button
            onClick={() => {
            auth.signout(() => history.push("/"));
            }}
        >
            Sign out
        </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
);

export { Login, PrivateRoute, AuthButton };