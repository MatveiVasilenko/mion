import React, {
    useContext
} from 'react'
import classes from './../../styles/layouts/office-layouts-styles.module.scss'
import Menu from './components/Menu'
import { DATA } from './../../project/data';
import svgSprite from './../../project/svg/svgSprite';
import ContextApp from './../../context/App/ContextApp';
import { createToken } from './../../context/App/actions';
import { useRouter } from 'next/router';
import cookie from 'react-cookies';

const Office = ({
    children,
}) => {
    const router = useRouter()

    const outUser = () => {
        localStorage.removeItem('userToken')
        cookie.remove('userToken')
        router.push('/ru/auth/login')
    }
    return (
        <div className={classes.officeWrapper}>
            <div className={classes.officeWrapperHeader}>
                <p className={classes.officeLogo}>{DATA.name}</p>
                <div className={classes.officeSocial}>
                    <div className={classes.officeSocialItem}>
                        {svgSprite('Telegram', {
                            width: '40px',
                            height: '25px'
                        })}
                    </div>
                    <div 
                        className={classes.officeSocialItem}
                        onClick={outUser}
                        >
                        {svgSprite('Out', {
                            width: '40px',
                            height: '25px'
                        })}
                    </div>
                </div>
            </div>
            <div className={classes.officeWrapperBody}>
                <div className={classes.officeWrapperMenu}>
                    <Menu />
                </div>
                <div className={classes.officeWrapperContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Office