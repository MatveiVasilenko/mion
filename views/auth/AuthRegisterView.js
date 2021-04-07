import React, {
    useState, useContext, useEffect
} from 'react'
import classes from './../../styles/views/auth-view-styles.module.scss'
import { NET } from './../../network';
import ContextApp from './../../context/App/ContextApp';
import Input from './../../widgets/form/components/Input';
import svgSprite from './../../project/svg/svgSprite';
import { useRouter } from 'next/router';
import { createToken } from './../../context/App/actions';
import cookie from 'react-cookies'

const AuthRegisterView = () => {
    const {dispatchApp} = useContext(ContextApp)
    const router = useRouter()
    console.log(router.query.refferal)
    const [data, setData] = useState({
        name: '',
        surname: '',
        password: '',
        email: '',
        phone: '',
        tokenName: 'userToken',
        politic: true
    })
    const [errorsData, setErrorsData] = useState({})

    useEffect(() => {
        setData({
            ...data,
            refferal_key: router.query.refferal ? router.query.refferal : null
        })
    }, [router])
    const dataSender = async () => {
        fetch(`${NET.BACK_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-Requested-With': 'XMLHttpRequest'
                // 'Authorization': 'Bearer ' + this.state.clientToken,
            },
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    console.log(data.token)
                    // dispatchApp(createToken(data.token))
                    localStorage.setItem('userToken', data.token)
                    cookie.save('userToken', data.token)
                    router.push('/ru/office')
                })
            } else if (response.status === 401) {
                response.json().then((errors) => {
                        const keys = Object.keys(errors.error)
                        let acc = {}
                        keys.map((el) => {
                            console.log(errors.error[el])
                            if (errors.error[el][0] === 'The email has already been taken.') {
                                return acc[el] = 'Пользователь уже зарегистрирован.'
                            } else if (errors.error[el][0] === 'The name field is required.' || errors.error[el][0] === 'The surname field is required.' || errors.error[el][0] === 'The email field is required.' || errors.error[el][0] === 'The phone field is required.' || errors.error[el][0] === 'The password field is required.' || errors.error[el][0] === 'The surname field is required.' || errors.error[el][0] === 'The email field is required.' || errors.error[el][0] === 'The phone field is required.' || errors.error[el][0] === 'The repeat password field is required.') {
                                return acc[el] = 'Поле должно быть заполнено'
                            } else {
                                return acc[el] = errors.error[el]
                            }
                            
                        })
                        setErrorsData(acc)
                    // }
                })
            } else if (response.status === 422) {
                response.json().then((error) => {
                    if (error === 'Politic') {
                        setErrorsData({
                            politic: 'Yes'
                        })
                    } else {
                        setErrorsData({
                            password: ['Пароли не совпадают'],
                            repeatPassword: ['Пароли не совпадают'],
                        })
                    }
                })
            }
        })
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__window}>
                <div className={classes.wrapper__icon}>{svgSprite('AuthForm', {width: '40px'})}</div>
                <div className={classes.title}>Регистрация</div>
                <Input 
                    attribute="name"
                    data={data}
                    setData={setData}
                    placeholder="Имя"
                    type="text"
                    svgIcon="AuthProfile"
                    errors={errorsData}

                />
                <Input 
                    attribute="surname"
                    data={data}
                    setData={setData}
                    placeholder="Фамилия"
                    type="text"
                    svgIcon="AuthProfile"
                    errors={errorsData}

                />
                <Input 
                    attribute="email"
                    data={data}
                    setData={setData}
                    placeholder="e-mail"
                    type="email"
                    svgIcon="AuthEmail"
                    errors={errorsData}

                />
                <Input 
                    attribute="phone"
                    data={data}
                    setData={setData}
                    placeholder="Телефон"
                    type="tel"
                    svgIcon="AuthPhone"
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
                <Input 
                    attribute="repeatPassword"
                    data={data}
                    setData={setData}
                    placeholder="Повторите пароль"
                    type="password"
                    svgIcon="AuthPassword"
                    errors={errorsData}

                />
                <div 
                    className={classes.politic}
                    onClick={() => setData({
                        ...data,
                        politic: !data.politic
                    })}
                    >
                    <div>
                        {svgSprite(data.politic ? 'AuthCheckTrue' : 'AuthCheckFalse', {
                            width: data.politic ? '45px' : '40px',
                            height: '45px'
                        })}
                    </div>
                    <div style={{
                        'margin-left': data.politic ? '4px' : 0
                    }}>
                        Я согласен с <a className={classes.politicLink} href="https://mion.courses/politic" target="_blank">политикой конфиденциальности</a>
                    </div>
                </div>
                {errorsData['politic'] === 'Yes' && <div className={classes.politicError}>Необходимо принять условия политики конфиденциальности</div>}
                <div
                    className={classes.btn}
                    onClick={dataSender}
                >Регистрация</div>
            </div>
        </div>
    )
}
export default AuthRegisterView