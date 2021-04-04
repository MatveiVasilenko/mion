import React, {
    useState, useEffect
} from 'react'
import useWindowDimensions from './../../../../global/utils';
import svgSprite from './../../../../project/svg/svgSprite';

const RefferalHead = ({
    classes,
    user,
    userData
}) => {
    const { width } = useWindowDimensions();    
    const mobile = width < 768 ? true : false

    // const widthDimensions = useWindowDimensions();
    // const [mobile, setMobile] = useState('');
    // useEffect(() => {
    //     widthDimensions < 768
    //         ? setMobile(true)
    //         : setMobile(false);
    // }, [widthDimensions]);

    const [counter, setCounter] = useState({
        all: 0,
        realMoney: 0,
        futureMoney: 0,
        active: 0
    })
    useEffect(() => {
        if (userData) {
            let active = 0
            let all = 0
            let realMoney = 0
            let futureMoney = 0
            for (let value in userData) {
                if (userData[value]) {
                    userData[value].map((el) => {
                        all++
                        if (el.status === '1') {
                            active++
                            if (value === 'first') {
                                realMoney = realMoney + 10
                                futureMoney = futureMoney + 10
                            } else if (value === 'second') {
                                realMoney = realMoney + 5
                                futureMoney = futureMoney + 5
                            } else if (value === 'third') {
                                futureMoney = futureMoney + 3
                            }
                        }
                    })
                }
            }
            setCounter({all, active, realMoney, futureMoney})
        }
    }, [userData])
    console.log(counter)
    return (
        !mobile ? <div className={classes.refferalHead}>
            <div className={classes.refferalHeadItem}>
                <div></div>
                <div>
                    <div className={classes.refferalHeadItemNumber}>{user && user.money} y.e</div>
                    <div className={classes.refferalHeadItemText}>Баланс</div>
                </div>
            </div>
            <div className={classes.refferalHeadItem}>
                <div></div>
                <div>
                    <div className={classes.refferalHeadItemNumber}>{counter.all}</div>
                    <div className={classes.refferalHeadItemText}>Всего партнеров</div>
                </div>
            </div>
            <div className={classes.refferalHeadItem}>
                <div></div>
                <div>
                    <div className={classes.refferalHeadItemNumber}>{counter.active}</div>
                    <div className={classes.refferalHeadItemText}>Активных партнеров</div>
                </div>
            </div>
            <div className={classes.refferalHeadItem}>
                <div></div>
                <div>
                    <div className={classes.refferalHeadItemNumber}>{counter.realMoney} y.e</div>
                    <div className={classes.refferalHeadItemText}>Расчетный доход</div>
                </div>
            </div>
            <div className={classes.refferalHeadItem}>
                <div></div>
                <div>
                    <div className={classes.refferalHeadItemNumber}>{counter.futureMoney} y.e</div>
                    <div className={classes.refferalHeadItemText}>Потенциальный доход</div>
                </div>
            </div>            
        </div>: 
        <div className={classes.refferalHeadMob}>
            <div className={classes.refferalHeadItemMob}>
                <div className={classes.refferalHeadItemWrapperMob}>
                    <div style={{'margin-right': '3px'}}>
                        {svgSprite('MoneyList', {
                            width: '13px',
                            height: '13px'
                        })}
                    </div>
                    <div className={classes.refferalHeadItemTextMob}>Баланс</div>
                </div>
                <div>
                    <div className={classes.refferalHeadItemNumberMob}>{user && user.money}</div>
                </div>
            </div>
            <div className={classes.refferalHeadItemMob}>
                <div className={classes.refferalHeadItemWrapperMob}>
                    <div className={classes.refferalHeadItemTextMob}>Всего</div>
                </div>
                <div>
                    <div className={classes.refferalHeadItemNumberMob}>{counter.all}</div>
                </div>
            </div>
            <div className={classes.refferalHeadItemMob}>
                <div className={classes.refferalHeadItemWrapperMob}>
                    <div className={classes.refferalHeadItemSvgMob}>
                        {svgSprite('Users', {
                            width: '20px',
                            height: '20px'
                        })}
                    </div>
                    <div className={classes.refferalHeadItemTextMob}>Актив</div>
                </div>
                <div>
                    <div className={classes.refferalHeadItemNumberMob}>{counter.active}</div>
                </div>
            </div>
            <div className={classes.refferalHeadItemMob}>
                <div className={classes.refferalHeadItemWrapperMob}>
                    <div className={classes.refferalHeadItemTextMob}>Расчет</div>
                </div>
                <div>
                    <div className={classes.refferalHeadItemNumberMob}>{counter.realMoney}</div>
                </div>
            </div>
            <div className={classes.refferalHeadItemMob}>
                <div className={classes.refferalHeadItemWrapperMob}>
                    <div className={classes.refferalHeadItemSvgMob}>
                        {svgSprite('Money', {
                            width: '20px',
                            height: '20px'
                        })}
                    </div>
                    <div className={classes.refferalHeadItemTextMob}>Полный</div>
                </div>
                <div>
                    <div className={classes.refferalHeadItemNumberMob}>{counter.futureMoney}</div>
                </div>
            </div>            
        </div>
    )
}
export default RefferalHead