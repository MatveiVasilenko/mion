import React from 'react'

const ProfileLispItem = ({
    classes,
    value
}) => {
    return (
        <div className={classes.profileLispItem}>
            <div>{value}</div>
        </div>
    )
}
export default ProfileLispItem