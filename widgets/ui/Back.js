import React from 'react'
import classes from './../../styles/widgets/ui/back-styles.module.scss'

const Back = ({
    title,
    onClick
}) => {
    return (
        <div 
            className={classes.wrapper}
            onClick={onClick}
            >
            <div></div>
            <div>{title}</div>
        </div>
    )
}
export default Back