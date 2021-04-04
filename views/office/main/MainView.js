import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/main-view-styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import ContextApp from './../../../context/App/ContextApp';
import MainHead from './components/MainHead';
import MainBody from './components/MainBody';
import MainTarif from './components/MainTarif';

const MainView = ({

}) => {
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const payment = stateApp.user &&  stateApp.user.status ? stateApp.user.status : '0'
    useEffect(() => {
        
    }, [stateApp, payment])
    console.log(payment)
    return (
        <div className={stylesOffice.containerOffice}>
            {payment === '1' &&<MainHead 
                classes={classes}
            />}
            {payment === '1' && <div className={classes.mainAction}>Новый урок ТЕМА уже во вкладке “Курсы”</div>}
            <MainBody 
                classes={classes}
            />
            <MainTarif classes={classes}/>
        </div>
    )
}
export default MainView