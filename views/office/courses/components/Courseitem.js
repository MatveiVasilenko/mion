import React from 'react'
import { NET } from './../../../../network';

const CourseItem = ({
    classes,
    el,
    handleCourses
}) => {
    console.log(el.img)
    return (
        <>
            <div
            onClick={() => handleCourses(el.course_id, el.id)}
            className={classes.courseItem}
            style={{
                'background-image': `linear-gradient(89.59deg, rgba(14,16,61,1) 25.06%, rgba(53,56,107,1) 44.03%, rgba(118,110,170,1) 62.65%, rgba(191,192,214,1) 81.28%, rgba(255,255,255,1) 91.52%)`,
                overflow: 'hidden'
            }}
        >
            <div className={classes.courseItemBody}>
                <div className={classes.courseItemBodyHead}>
                    <div className={classes.courseItemBodyTitle}>{el.title}</div>
                    <div className={classes.courseItemBodyHours}>{el.hours} ч</div>
                </div>
                <div className={classes.courseItemBodyFooter}>
                    <div className={classes.courseItemBodyDate}>{el.date} </div>
                    <div>последнее обновление</div>
                </div>
            </div>
            <img src={`${NET.BACK_URL_MODULE}${el.img}`} style={{opacity: '0.2', width: '100%'}} />
        </div>
        </>
    )
}
export default CourseItem