import { ITranscribedMessage } from "@/types/transcribedMessage.interface";

export interface IAudioStore {
    audio: HTMLAudioElement | null;
    setAudio: (audio: HTMLAudioElement | null) => void;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    currentTime: number;
    setCurrentTime: (currentTime: number) => void;
    duration: number;
    setDuration: (duration: number) => void;
    stopAndClear: () => void;
}

export interface ITranstriptionStore {
    transcriptions: ITranscribedMessage[];
    setTranscriptions: (transcriptions: ITranscribedMessage[]) => void;
    error: string | null;
    setError: (error: string | null) => void;
    currentMessageTranscription: ITranscribedMessage | null;
    setCurrentMessageTranscription: (transcription: ITranscribedMessage | null) => void;
}