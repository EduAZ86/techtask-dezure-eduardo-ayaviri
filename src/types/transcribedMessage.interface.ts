export type TRole = 'user' | 'agent';

export interface ITranscribedMessage {
    id?: string
    content: string;
    role: TRole;
    start: number;
    end: number;
}
