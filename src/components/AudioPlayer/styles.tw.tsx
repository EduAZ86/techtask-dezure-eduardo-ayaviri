import { FC } from "react"
import { IAudioControllerContainerProps, IAudioPlayerContainerProps, IButtonsContainerProps, IControlButtonProps, IProgressionBarProps, ITitleAudioContainerProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons"
import { Typography } from "../Typography"
import { formatTime } from "@/utils/formatTime"

export const AudioPlayerContainer: FC<IAudioPlayerContainerProps> = ({ children }) => {
    return (
        <div
            className={`
                h-fit w-full
                p-4
                flex
                flex-row relative
                bg-light-background dark:bg-dark-background
                justify-center items-center
                rounded-2xl
            `}
        >
            {children}
        </div>
    )
}

export const TitleAudioContainer: FC<ITitleAudioContainerProps> = ({ children }) => {
    return (
        <span>
            {children}
        </span>
    )
}

export const ControlButton: FC<IControlButtonProps> = ({ play, handleClick, type }) => {
    return (
        <button
            className={`
                w-10 h-10 rounded-full
                hover:bg-light-shadow hover:dark:bg-dark-shadow
                active:scale-95
                duration-150
                flex flex-row relative
                justify-center items-center
                text-center
            `}
            type="button"
            onClick={handleClick}
        >{
                type === 'playpause'
                    ?
                    <FontAwesomeIcon
                        icon={play ? faPause : faPlay}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faStop}
                    />
            }
        </button>
    )
}

export const AudioControllerContainer: FC<IAudioControllerContainerProps> = ({ children }) => {
    return (
        <div
            className={`
                w-full h-fit
                
                flex flex-col
                relative
                items-center
                justify-center
            `}
        >
            {children}
        </div>
    )
};

export const ButtonsContainer: FC<IButtonsContainerProps> = ({ children }) => {
    return (
        <div
            className={`
                w-fit h-fit
                flex relative
                flex-row
            `}
        >
            {children}
        </div>
    )
}

export const ProgressionBar: FC<IProgressionBarProps> = ({ currentTime, duration, handleSeek }) => {
    return (
        <div
            className={`
                w-full h-fit
                p-3
                flex relative
                flex-row
                gap-2
            `}
        >
            <Typography variant="label" key={'currentTime'}>{formatTime(currentTime)}</Typography>
            <input
                type="range"
                value={currentTime}
                max={duration}
                onChange={handleSeek}
                step={0.01}
                className="w-full"
            />
            <Typography variant="label" key={'duration'}>{formatTime(duration)}</Typography>

        </div>
    )
}