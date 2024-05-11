import { Imessage, TRole } from "@/types/message.interface";
import { ReactNode } from "react";

export interface IMessageCardProps {
    cardData: Imessage;
}

export interface IMessageCardContainerProps {
    children: ReactNode;
    role: TRole;
}

export interface IMessageContainerProps extends IMessageCardContainerProps { }

export interface IUserIconContainerProps extends IMessageCardContainerProps { }

export interface IStartTimeMessageContainer extends Pick<IMessageCardContainerProps, 'children'> { }