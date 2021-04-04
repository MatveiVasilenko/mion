import React from 'react' 
import Video from './components/Video';

const ModuleSwitch = ({moduleData}) => {
    const {
        type
    } = moduleData
    console.log(type)
    const config = {
        ...moduleData
    }
    switch (type) {
        case 'video': 
            return <Video {...config}/>
        default:
            return <div>Неизвестный тип модуля</div>
    }
}
export default ModuleSwitch