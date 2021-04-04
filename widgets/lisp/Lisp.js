import React from 'react'
import classes from './../../styles/widgets/lisp-styles.module.scss'

const Lisp = ({
    data,
    handleContent
}) => {
    return (
        <div>
            <div className={classes.contentHead}>Модули курса</div>
            <div className={classes.contentBody}>
                {data && data.map((elem, idx) => (
                    <div
                        key={`contentCourse${idx}`}
                        onClick={() => handleContent(elem.id, idx)}
                        className={classes.contentItem}
                    >
                        <div>{idx + 1}.</div>
                        <div className={classes.contentItemTitle}>{elem.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Lisp