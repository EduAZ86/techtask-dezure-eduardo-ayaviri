import { FC } from "react";
import { IMessageMapperProps } from "./type";
import { MessageCard } from "../MessageCard";
import { Imessage } from "@/types/message.interface";
import { IMessageMapperContainer } from "./styles.tw";

export const MessageMapper: FC<IMessageMapperProps> = ({ dataMessages }) => {
    return (
        <IMessageMapperContainer>
            <>
                {dataMessages.map((message: Imessage, index: number) => {
                    return (
                        <MessageCard
                            key={`message-${index}`}
                            cardData={message}
                        />
                    )
                })}
            </>
        </IMessageMapperContainer>
    )
}