import React from 'react' 
import AuthLoginView from './../../../views/auth/AuthLoginView';
import Auth from './../../../layouts/auth/Auth';

const Login = () => {
    return (
        <Auth>
            <AuthLoginView />
        </Auth>
    )
}
export default Login