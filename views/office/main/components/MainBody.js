import React, {
    useState
} from 'react'
import TextField from './../../../../widgets/ui/TextField';
import { DATA } from './../../../../project/data';

const MainBody = ({
    classes
}) => {
    const [showWhy, setShowWhy] = useState(false)
    return (
        <div className={classes.mainBody}>
            <div className={classes.mainBodyImage}></div>
            <div className={classes.mainBodyContent}>
                <TextField>
                    <div className={classes.mainTextPar}>
                        {DATA.about}
                    </div>
                    <div className={classes.mainTextPar}>{DATA.about2}</div>
                    <div className={classes.mainTextPar}>
                        {DATA.about3}
                    </div>
                    <div className={classes.mainTextPar}>
                        {DATA.about4}
                    </div>
                </TextField>
                <div className={classes.quote}>Обучаясь - зарабатывай!</div>
                <div 
                    onClick={() => setShowWhy(!showWhy)}
                    className={classes.btnQuote}>
                    <div className={classes.btnQuoteText}>Узнать как</div>
                </div>
                <div className={showWhy ? [classes.whyActive, classes.why].join(' ') : classes.why}>
                    <div style={{'text-align': 'center'}} className={classes.mainShowWhyText}>{DATA.whyus}</div>
                    <div className={classes.mainShowWhyText}>{DATA.whyus2}</div>
                    <div className={classes.mainShowWhyText}>{DATA.whyus3}</div>
                    <div className={classes.mainShowWhyText}>{DATA.whyus4}</div>
                    <div>{DATA.whyus5}</div>
                </div>
            </div>
        </div>
    )
}
export default MainBody