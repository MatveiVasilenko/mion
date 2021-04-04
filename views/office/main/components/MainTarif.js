import React from 'react'
import { DATA } from './../../../../project/data';
import MainTarifCard from './MainTarifCard';
import svgSprite from './../../../../project/svg/svgSprite';

const MainTarif = ({
    classes
}) => {
    const standard = DATA.prices.standard
    const premium = DATA.prices.premium
    return (
        <div className={classes.tarifWrapper}>
            <div className={classes.tarifWrapperInner}>
                <div>
                    <div className={classes.tarifTitle}>{standard.name}</div>
                    <div className={classes.tarifArrow}>{svgSprite('ArrowUp', {
                        width: '100%',
                        height: '33px'
                    })}</div>
                </div>
                <div className={classes.tarifWrapperBody}>
                    {
                        standard.periods.map((el, idx) => (
                            <MainTarifCard 
                                premiun={false}
                                data={el}
                                classes={classes}
                                key={`card${idx}`}
                                />
                        ))
                    }
                </div>
            </div>
            <div className={[classes.tarifWrapperInner, classes.tarifWrapperInnerRight].join(' ')}>
                <div>
                    <div className={classes.tarifTitlePremium}>{premium.name}</div>
                    <div className={classes.tarifArrow}>{svgSprite('ArrowUpSmall', {
                        width: '100%',
                        height: '33px'
                    })}</div>
                </div>
                <div className={classes.tarifWrapperBodyPremium}>
                    {
                        premium.periods.map((el, idx) => (
                            <MainTarifCard 
                                premium={true}
                                data={el}
                                classes={classes}
                                key={`card${idx}`}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default MainTarif