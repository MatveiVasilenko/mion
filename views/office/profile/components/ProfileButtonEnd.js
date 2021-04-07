import React from 'react'
import { transformWordCount } from './../../main/utils';

const ProfileButtonEnd = ({
    classes,
    date
}) => {
    const userDate = new Date(date)
    const nowDate = new Date()
    const diff = (userDate.getTime() - nowDate.getTime()) / 1000 / 3600 / 24
    let day = 0
    if (diff < 0) {
        day = 'подписка не активна'
    } else {
        day = Math.floor(diff)
    }
    return (
        <div className={classes.profileBtnTarif}>
            <div className={classes.profileBtnTarifUp}>Продлить тариф</div>
            <div className={classes.profileBtnTarifDown}>{day > 0 ? 'осталось' : ''} {day} {transformWordCount(day)}</div>
        </div>
    )
}
export default ProfileButtonEnd