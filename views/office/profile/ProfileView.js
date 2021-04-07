import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import classes from './../../../styles/views/profile-view-styles.module.scss'
import MainHead from './../main/components/MainHead';
import ContextApp from './../../../context/App/ContextApp';
import ProfileLisp from './components/ProfileLisp';
import ProfileImage from './components/ProfileImage';
import ProfileLink from './components/ProfileLink';
import ProfileButtonEnd from './components/ProfileButtonEnd';


const ProfileView = ({

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
            <div className={classes.profileWrapper}>
                <div className={classes.profileItemLeft}>
                    <ProfileButtonEnd 
                        classes={classes}
                        date={stateApp.user.day_end}
                        /> 
                    <div>
                        <ProfileLisp 
                            classes={classes}
                            user={stateApp.user || {}}
                            />
                    </div>
                </div>
                <div className={classes.profileItemCenter}>
                    <ProfileImage classes={classes}/> 
                </div>
                <div className={classes.profileItemRight}>
                    <ProfileLink 
                        classes={classes}
                        link={stateApp.user.refferal_key || ''}
                    />
                </div>
            </div>

        </div>
    )
}
export default ProfileView