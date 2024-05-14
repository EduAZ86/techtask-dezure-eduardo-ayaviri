import { ITranscribedMessage, TRole } from "@/types/transcribedMessage.interface";
import { v4 as uuidv4 } from 'uuid';


export class TranscribedMessage implements ITranscribedMessage {
    id: string;
    content: string;
    end: number;
    role: TRole;
    start: number;
    constructor({ content, end, role, start }: ITranscribedMessage) {
        this.id = uuidv4()
        this.content = content
        this.role = role
        this.start = start
        this.end = end
    }
}