export type TRole = 'user' | 'agent';

export interface Imessage {
    content: string;
    role: TRole;
    start: number;
    end: number;
}