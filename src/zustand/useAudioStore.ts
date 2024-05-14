import { create } from "zustand";
import { IAudioStore } from "./types";

export const useAudioStore = create<IAudioStore>((set, get) => ({
    audio: null,
    setAudio: (audio) => {
        set(() => ({ audio }))
    },
    isPlaying: false,
    setIsPlaying: (isPlaying) => {
        set(() => ({ isPlaying }))
    },
    currentTime: 0,
    setCurrentTime(currentTime) {
        set(() => ({ currentTime }))
    },
    duration: 0,
    setDuration(duration) {
        set(() => ({ duration }))
    },
    stopAndClear() {
        set(() => ({
            audio: null,
            isPlaying: false,
            currentTime: 0,
            duration: 0
        }))
    },
}))