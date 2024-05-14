import { postFileTOTranscription } from "@/services/fetching";
import { useAudioStore } from "@/zustand/useAudioStore";
import { useEffect, useState } from "react";

export const useAudioFile = () => {

    const {
        audio,
        setAudio,
        isPlaying,
        setIsPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
    } = useAudioStore()

    const [isAudioInitialized, setIsAudioInitialized] = useState(false);

    useEffect(() => {

        if (audio) {
            const handleTimeUpdate = () => {
                setCurrentTime(audio.currentTime);
            };
            const handleLoadedMetadata = () => {
                setDuration(audio.duration);
                setIsAudioInitialized(true);
            };

            audio.addEventListener("timeupdate", handleTimeUpdate);
            audio.addEventListener("loadedmetadata", handleLoadedMetadata);

            return () => {
                audio.removeEventListener("timeupdate", handleTimeUpdate);
                audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            };
        }
    }, [audio]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault()
        // const file = e.target.files?.[0];
        // if (file) {
        //     const audioFile = new Audio(URL.createObjectURL(file));
        //     setAudio(audioFile);
        //     // postFileTOTranscription(file);
        // }
        loadTestCall()
    };
    const loadTestCall = () => {
        const filePath = "/TestCall.wav";
        const audioFile = new Audio(filePath);
        setAudio(audioFile);
    }

    const togglePlay = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audio) {
            const newTime = parseFloat(e.target.value);
            audio.currentTime = newTime;
            setCurrentTime(newTime);
        }
        
    };
    const handleStop = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        }
    };

    return {
        currentTime,
        isPlaying,
        duration,
        handleSeek,
        togglePlay,
        handleFileChange,
        handleStop,
        isAudioInitialized,
    };
}