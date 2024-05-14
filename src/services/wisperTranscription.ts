import OpenAI from "openai";
import fs from 'fs';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ID_ORGANIZATION,
    project: process.env.PROJECT_ID
});

export const wisperTranscription = async (audio: File) => {

    const transcription = await openai.audio.transcriptions.create({
        file: audio,
        model: "whisper-1",
        response_format: "json"
    });
    return transcription
}
