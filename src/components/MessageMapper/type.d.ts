import { Imessage } from "@/types/message.interface";
import { ReactNode } from "react";

export interface IMessageMapperProps {
    dataMessages: Imessage[]
}

export interface IMessageMapperContainerProps {
    children: ReactNode;
}