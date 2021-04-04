import React, {
    useState, useEffect
} from 'react'
import classes from './../../styles/views/auth-view-styles.module.scss'
import Input from './../../widgets/form/components/Input';
import { NET } from './../../network';
import cookie from 'react-cookies';
import { useRouter } from 'next/router';
import useWindowDimensions from './../../global/utils';

const AuthLoginView = () => {
    
    const [data, setData] = useState({
        email: '',
        password: '',
        tokenName: 'userToken'
    })
    const router = useRouter()
    const [errorsData, setErrorsData] = useState({})
    const dataSender = async () => {
        fetch(`${NET.BACK_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + this.state.clientToken,
            },
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    cookie.save('userToken', data.token)
                    localStorage.setItem('userToken', data.token)
                    router.push('/ru/office')

                })
            } else if (response.status === 401) {
                response.json().then((errors) => {
                    if (errors.error === 'password') {
                        setErrorsData({
                            ...errorsData,
                            password: 'Пароль введен неверно'
                        })
                    } else if (errors.error === 'no-user') {
                        setErrorsData({
                            ...errorsData,
                            email: 'Пользователь не зарегестрирован'
                        })
                    } else {
                        const keys = Object.keys(errors.error)
                        let acc = {}
                        keys.map((el) => {
                            return acc[el] = errors.error[el]
                        })
                        console.log(keys)
                        setErrorsData(acc)
                    }
                })
            }
        })
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__window}>
                <div className={classes.title}>Авторизация</div>
                <Input 
                    attribute="email"
                    data={data}
                    setData={setData}
                    placeholder="e-mail"
                    type="text"
                    svgIcon="AuthEmail"
                    errors={errorsData}
                />
                <Input 
                    attribute="password"
                    data={data}
                    setData={setData}
                    placeholder="Пароль"
                    type="password"
                    svgIcon="AuthPassword"
                    errors={errorsData}
                />
                <div className={classes.btnSubSub}>Забыли пароль</div>
                <div
                    className={classes.btn}
                    onClick={dataSender}
                >Вход</div>
                <div 
                    className={classes.btnSub}
                    onClick={() => router.push('/ru/auth/register')}
                    >Регистрация</div>
            </div>
        </div>
    )
}
export default AuthLoginView