import React, {
    useContext, useState, useEffect
} from 'react'
import ContextApp from './../../context/App/ContextApp';
import { NET } from './../../network';
import cookie from 'react-cookies';
import { useRouter } from 'next/router';
import { createToken } from './../../context/App/actions';

const ProtectedOffice = ({
    children
}) => {
    const {dispatchApp} = useContext(ContextApp)
    const router = useRouter()
    const userToken = cookie.load('userToken')
    const [user, setUser] = useState(null)
    const dataSender = async () => {
        fetch(`${NET.BACK_URL}/profile`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setUser(data)                    
                    dispatchApp(createToken(data.user))
                })
            } else if (response.status === 401) {
                router.push('/ru/auth/login')
            }
        })
    }
    if (userToken) {
        if (!user) {
            dataSender()
        } else {

        }
    } else {
        useEffect(() => {
            router.push('/ru/auth/login')
        }, [])
    }
    console.log(userToken)
    if (!userToken) { return null }
    return (
        <>
            {children}
        </>
    )
}
export default ProtectedOffice