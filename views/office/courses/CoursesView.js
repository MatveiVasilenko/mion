import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/course-view-styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import CourseItem from './components/Courseitem';
import Lisp from '../../../widgets/lisp/Lisp';
import ContextApp from './../../../context/App/ContextApp';
const CoursesView = ({
    courses,
}) => {
    const {stateApp} = useContext(ContextApp)
    const router = useRouter()
    const payment = stateApp.user &&  stateApp.user.status ? stateApp.user.status : '0'
    useEffect(() => {
        if (payment === '0') {
            router.push('/ru/office')
        }
    }, [stateApp, payment])
    const [pageCourse, setPageCourse] = useState(0)
    const parentCourse = courses.filter((el) => el.course_id === null).slice(pageCourse, pageCourse + 2)
    const [coursesData, setCoursesData] = useState(parentCourse)
    const [content, setContent] = useState([])
    const [showBack, setShowBack] = useState(false)

    const handleCourses = (children, id) => {
        setShowBack(true)
        setContent(() => {
            return courses.filter(el => Number(el.course_id) === id)
        })
        setCoursesData([courses.find(el => Number(el.id) === id)])
    }
    const handleContent = (id) => {
        router.push(`/ru/office/modules?course_id=${id}`)
    }
    const back = () => {
        setCoursesData(parentCourse)
        setContent([])
        setShowBack(false)
    }
    return (
        <div className={stylesOffice.containerOffice}>
            <div className={classes.breadcrumb}>
                {showBack ? 
                    <div onClick={() => back()}>Вернуться к курсам</div>:
                    pageCourse > 0 ? <div>Преведущие курсы</div> : <></>}
            </div>
            <div className={classes.courseWrapper}>
                <div className={!showBack ? classes.courseParent : [classes.courseParent, classes.courseParentActive].join(' ')}>
                {
                    coursesData && coursesData.map((el, idx) => (
                        <>
                            <CourseItem 
                                classes={classes}
                                el={el}
                                key={`courses${idx}`}
                                handleCourses={handleCourses}
                            />
                            <div className={!showBack ? classes.courseItemDesc : [classes.courseItemDesc, classes.courseItemDescActive].join(' ')}>{el.description}</div>
                        </>
                    ))
                }
                </div>
                <div className={!showBack ? classes.contentParent : [classes.contentParent, classes.contentParentActive].join(' ')}>
                    {
                        content.length > 0 && (
                            <>
                                <Lisp 
                                    data={content}
                                    handleContent={handleContent}
                                />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default CoursesView