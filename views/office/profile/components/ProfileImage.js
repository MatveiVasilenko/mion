import React from 'react'
import svgSprite from './../../../../project/svg/svgSprite';

const ProfileImage = ({
    classes
}) => {
    return (
        <div className={classes.profileImage}>
            {svgSprite('Profile', {
                width: '120px',
                height: '120px',
                fill: '#0e103d'
            })}
        </div>
    )
}
export default ProfileImage