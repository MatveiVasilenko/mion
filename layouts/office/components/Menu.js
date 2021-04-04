import React from 'react'
import { configMenu } from './initData';
import svgSprite from './../../../project/svg/svgSprite';
import classes from './../../../styles/layouts/office-layouts-styles.module.scss'
import {useRouter} from 'next/router'
import cookie from 'react-cookies';
import useWindowDimensions from './../../../global/utils';

const Menu = () => {

    const { width } = useWindowDimensions();    
    const mobile = width < 768 ? true : false
    const router = useRouter()
    return (
        !mobile ? <div>
        {configMenu.map((item, idx) => (
                <div 
                    className={classes.officeWrapperMenuItem}
                    onClick={() => router.push(item.path)}
                    key={`itemMenu${idx}`}
                    >
                    <div 
                        styles={{
                            fill: 'inherit',
                            stroke: 'inherit'
                        }}
                    >
                        <div styles={{
                            fill: 'inherit',
                            stroke: 'inherit'

                        }}>
                            {svgSprite(item.svg, {
                                width: '55px',
                                height: '45px',
                                
                            })}
                        </div>
                        <div>{item.title}</div>
                    </div>
                 </div> 
                ))}
                {/* <div 
                    className={classes.officeWrapperMenuItem}
                    onClick={outUser}
                    >
                    <div 
                        styles={{
                            fill: 'inherit',
                            stroke: 'inherit'
                        }}
                    >
                        <div styles={{
                            fill: 'inherit',
                            stroke: 'inherit'

                        }}>
                            {svgSprite(item.svg, {
                                width: '55px',
                                height: '45px',
                                
                            })}
                        </div>
                        <div>Выход</div>
                    </div>
                 </div> */}
            </div>: 
            <div className={classes.menuMob}>
                {configMenu.map((item, idx) => (
                    <div 
                        className={classes.menuMobSvg}
                        onClick={() => router.push(item.path)}
                        key={`itemMenuMob${idx}`}
                        >
                        {svgSprite(item.svg, {
                            width: '40px',
                            height: '40px',                                
                        })}
                    </div>
                 ))}
            </div>

    )
}
export default Menu