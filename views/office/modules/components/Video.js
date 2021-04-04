import React, {
    useState, useMemo, useCallback, useRef
} from 'react'
import ReactPlayer from 'react-player'
import TextField from '../../../../widgets/ui/TextField';
import { NET } from './../../../../network';
import classes from './../../../../styles/views/module-view-styles.module.scss'
import ControlsVideo from './ControlsVideo';
import screenfull from 'screenfull'

const Video = ({
    path,
    description
}) => {
    //Controls block state
    const [showControls, setShowControls] = useState(false)
    // const [showPlay, setShowPlay] = useState(false)
    const [volume, setVolume] = useState(1)
    const [state, setState] = useState({
        playing: true
    })

    const {
        playing
    } = state
    const refPlayer = React.useRef(null)
    const refPlayerContainer = React.useRef(null)
    
    //FunctionControls
    const playVideo = () => {
        setState({...state, playing: !playing})
        setTimeout(() => {
            setShowControls(false)
        }, 3000)
    }
    const toggleFullScreen = () => {
        screenfull.toggle(refPlayerContainer.current)
    }
    const changeVolume = (v) => {
        setVolume(Number(v))
    }
    const progressVideo = (changeData) => {
        setState({...state, ...changeData})
    }
    const progressVideoContols = (e) => {
        console.log(e)
        // console.log(parseFloat(e))
        setState({ ...state, played: Number(e) });
        refPlayer.current.seekTo(Number(e))
    }
    const durationVideo = useCallback((e) => {
        // setProgress({
        //     ...progress,
        //     end: e
        // })
    }, [])
    const handleFastwind = () => {
        refPlayer.current.seekTo(refPlayer.current.getCurrentTime() + 10)
    }
    console.log(`${NET.BACK_URL_MODULE}${path}`)
    return (
        <div 
            className={classes.wrapper}
            onClick={() => setShowControls(true)}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => {
                setTimeout(() => {
                    setShowControls(false)
                }, 3000)
            }}
        >
            <div ref={refPlayerContainer} className={classes.videoWrapper}>
                <ReactPlayer 
                    url={`${NET.BACK_URL_MODULE}${path}`}
                    playing={playing}
                    volume={volume}
                    onProgress={progressVideo}
                    onDuration={(e) => durationVideo(e)}
                    ref={refPlayer}
                    width="100%"
                    height="auto"
                    onSeek={(e) => console.log(e)}
                    seeking={false}
                    pip={false}
                    light={false}
                />
                <ControlsVideo 
                    showControls={showControls}
                    classes={classes}
                    playing={playing}
                    volume={volume}
                    progress={state}
                    funcs={{
                        play: playVideo,
                        volume: changeVolume,
                        progress: progressVideoContols,
                        full: toggleFullScreen
                    }}
                    onFastwind={handleFastwind}
                />
            </div>
            <TextField>
                {description}
            </TextField>

        </div>
    )
}
export default Video