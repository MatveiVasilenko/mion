import React from 'react'
import ProtectedOffice from '../../../../global/decorators/ProtectedOffice';
import Office from '../../../../layouts/office/Office'
import { NET } from './../../../../network';
import CoursesView from './../../../../views/office/courses/CoursesView';

const OfficeCourses = ({
    courses
}) => {
    // console.log(courses)
    return (
        <ProtectedOffice>
            <Office>
                <CoursesView 
                    courses={courses}
                />
            </Office>
        </ProtectedOffice>
    )
}

export async function getServerSideProps({req, params}) {

    // const userToken = localStorage.getItem('userToken')
    // const {userToken, setUserToken, lang} = useContext(UserContext)
    // const cookies = cookie.parse(req?.headers?.cookie || '');
    // const userToken = cookies?.session_token;

    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`
        },
        method: 'GET'
    };

    const res = await fetch(
        `${NET.BACK_URL}/courses`,
        headers,
    );
    const courses = await res.json()

    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        courses
      } // will be passed to the page component as props
    }
  }

export default OfficeCourses
