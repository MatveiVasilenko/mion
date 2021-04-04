import React, {
    useState
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/module-view-styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import ModuleSwitch from './ModuleSwitch';
import Lisp from '../../../widgets/lisp/Lisp';
import Back from '../../../widgets/ui/Back';
import svgSprite from './../../../project/svg/svgSprite';

const ModulesView = ({
    modules
}) => {
    const [activeModule, setActiveModule] = useState(0)
    const [moduleData, setModuleData] = useState(modules[activeModule])
    const router = useRouter()

    const handleContent = (elemID, idx) => {
        setActiveModule(idx)
        setModuleData(modules[idx])
    }
    return (
        <div className={stylesOffice.containerOffice}>
            <div className={classes.modulesHead}>
                <Back 
                    title="Вернуться к курсам"
                    onClick={() => router.push('/ru/office/courses')}
                />
                <div className={classes.modulesHead__Title}>{modules[activeModule].title}</div>
            </div>
            <div className={classes.modules}>
                <div className={classes.modulesBody}>
                    <ModuleSwitch 
                        moduleData={moduleData}
                        />
                    <div className={classes.comment}>
                        <div style={{
                            paddingRight: 10
                        }}>Комментировать в </div>
                        <div>
                            {svgSprite('Telegram', {
                                width: '36px',
                                height: '24px'                                
                            })}
                        </div>
                    </div>
                </div>
                <div className={classes.modulesLisp}>
                    <Lisp 
                        data={modules}
                        handleContent={handleContent}
                    />
                </div>
            </div>
        </div>
    )
}
export default ModulesView