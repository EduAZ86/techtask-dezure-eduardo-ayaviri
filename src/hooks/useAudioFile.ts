import { useAudioStore } from "@/zustand/useAudioStore";
import { useEffect } from "react"

export const useAudioFile = () => {

    const {
        audio,
        setAudio,
        isPlaying,
        setIsPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration
    } = useAudioStore()

    useEffect(() => {
        if (audio) {
            const handleTimeUpdate = () => {
                setCurrentTime(audio.currentTime);
            };
            const handleLoadedMetadata = () => {
                setDuration(audio.duration);
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
        const file = e.target.files?.[0];
        if (file) {
            const audioFile = new Audio(URL.createObjectURL(file));
            setAudio(audioFile);
        }
    };

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
    return { currentTime, isPlaying, setCurrentTime, duration, handleSeek, togglePlay, handleFileChange }
}

