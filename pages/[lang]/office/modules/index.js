import React from 'react'
import Office from '../../../../layouts/office/Office'
import { NET } from '../../../../network';
import ModulesView from './../../../../views/office/modules/ModulesView';

const OfficeCourses = ({
    modules = []
}) => {
    return (
        <Office>
            <ModulesView 
                modules={modules}
            />
        </Office>
    )
}

export async function getServerSideProps({req, query}) {

    // const {userToken, setUserToken, lang} = useContext(UserContext)
    // const cookies = cookie.parse(req?.headers?.cookie || '');
    // const userToken = cookies?.session_token;

    const headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            // Authorization: `Bearer ${userToken}`,
        },
        method: 'GET'
    };

    const res = await fetch(
        `${NET.BACK_URL}/modules/${query.course_id}`,
        headers,
    );
    const modules = await res.json()

    
   
   
    // const globalErr = data.globalErr || data.globalErr;
    // if (globalErr) { setAlertData({ type: 'error', cont: globalErr }); } else if (data) { 
    //     setDataProduct(data.data)
    // }
    return {
      props: {
        modules
      } // will be passed to the page component as props
    }
  }

export default OfficeCourses
