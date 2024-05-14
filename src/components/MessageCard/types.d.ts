import { ITranscribedMessage, TRole } from "@/types/transcribedMessage.interface";
import { ReactNode } from "react";

export interface IMessageCardProps {
    cardData: ITranscribedMessage;
}

export interface IMessageCardContainerProps {
    children: ReactNode;
    role: TRole;
}

export interface IMessageContainerProps extends IMessageCardContainerProps {
    handleClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IUserIconContainerProps extends IMessageCardContainerProps { }

export interface IStartTimeMessageContainer extends Pick<IMessageCardContainerProps, 'children'> { }