import React from 'react' 
import Auth from './../../../layouts/auth/Auth';
import AuthRegisterView from './../../../views/auth/AuthRegisterView';

const Login = () => {
    return (
        <Auth>
            <AuthRegisterView />
        </Auth>
    )
}
export default Login