export interface IAudioStore {
    audio: HTMLAudioElement | null;
    setAudio: (audio: HTMLAudioElement | null) => void;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    currentTime: number;
    setCurrentTime: (currentTime: number) => void;
    duration: number;
    setDuration: (duration: number) => void;
}