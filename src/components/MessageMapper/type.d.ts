import { Imessage } from "@/types/transcribedMessage.interface";
import { ReactNode } from "react";

export interface IMessageMapperProps {
    dataMessages: Imessage[]
}

export interface IMessageMapperContainerProps {
    children: ReactNode;
}