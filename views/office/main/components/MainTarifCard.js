import React from 'react'
import { transformWordCount } from './../utils';

const MainTarifCard = ({
    premium,
    classes,
    data
}) => {
    return (
        <div className={classes.mainTarifCardWrapper}>
            {premium ? <div className={[classes.mainTarifCard, classes.mainTarifCardPremium].join(' ')}>
                <div className={classes.mainTarifCardPremiumTitle}>Уже скоро</div>
                <div className={classes.mainTarifCardPremiumSubtitle}>+ индивидуальные консультации</div>
            </div> : <div className={classes.mainTarifCard}>
                <div className={classes.mainTarifCardPrice}>{data.price} грн</div>
                <div className={classes.mainTarifCardSale}>{data.sale} грн</div>
                <div className={classes.mainTarifCardMounth}>{data.mounth} месяц{transformWordCount(data.mounth)}</div>
            </div>}
            {!premium && <div className={classes.mainTarifBtn}>Оплатить</div>}
        </div>
    )
}
export default MainTarifCard