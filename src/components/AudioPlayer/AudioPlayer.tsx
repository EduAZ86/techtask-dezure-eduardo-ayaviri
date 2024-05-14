'use client'
import { FC } from "react";
import { AudioControllerContainer, AudioPlayerContainer, ButtonsContainer, ControlButton, ProgressionBar } from "./styles.tw";
import { InputFile } from "../InputFile/InputFile";
import { useAudioFile } from "@/hooks/useAudioFile";

export const AudioPlayer: FC = () => {
    const {
        currentTime,
        duration,
        isPlaying,
        handleFileChange,
        handleSeek,
        togglePlay,
        handleStop,       
    } = useAudioFile()


    return (
        <AudioPlayerContainer>
            <AudioControllerContainer>
                <ProgressionBar
                    currentTime={currentTime}
                    duration={duration}
                    handleSeek={handleSeek}
                />
                <ButtonsContainer>
                    <InputFile handleFileChange={handleFileChange} />
                    <ControlButton
                        handleClick={togglePlay}
                        key={'playOrPause'}
                        type="playpause"
                        play={isPlaying}
                    />
                    <ControlButton
                        handleClick={handleStop}
                        key={'stop'}
                        type="stop"
                        play={true}
                    />
                </ButtonsContainer>
            </AudioControllerContainer>
        </AudioPlayerContainer>
    )
}