import React from 'react'
import ProfileLispItem from './ProfileLispItem'

const ProfileLisp = ({
    classes,
    user
}) => {
    const userData = [
        {
            title: 'surname',
            value: user.surname || ''
        },
        {
            title: 'name',
            value: user.name || ''
        },
        {
            title: 'email',
            value: user.email || ''
        },
        {
            title: 'phone',
            value: user.phone || ''
        },
    ]
    return (
        <div className={classes.profileLispWrapper}>
            {
                userData.map((el, idx) => (
                    <ProfileLispItem 
                        classes={classes}
                        value={el.value}
                        key={`lispItem${idx}`}
                    /> 
                ))
            }
        </div>
    )
}
export default ProfileLisp