import { create } from "zustand";
import { ITranstriptionStore } from "./types";


export const useTranscriptionStore = create<ITranstriptionStore>((set, get) => ({
    transcriptions: [],
    setTranscriptions: (transcriptions) => {
        set(() => ({ transcriptions }))
    },
    error: null,
    setError: (error) => {
        set(() => ({ error }))
    },
    currentMessageTranscription: null,
    setCurrentMessageTranscription(transcription) {
        set(() => ({ currentMessageTranscription: transcription }))
    },
}))