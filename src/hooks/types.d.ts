import { ITranscribedMessage } from "@/types/transcribedMessage.interface";

export interface ISpeechRecognitionHook {
    startListening: () => void;
    stopListening: () => void;
    messages: ITranscribedMessage[];
    isListening: boolean;
    error: string | null;
}