import { FC } from "react";
import { IMessageMapperProps } from "./type";
import { MessageCard } from "../MessageCard";

import { IMessageMapperContainer } from "./styles.tw";
import { ITranscribedMessage } from "@/types/transcribedMessage.interface";
import { useAudioStore } from "@/zustand/useAudioStore";

export const MessageMapper: FC<IMessageMapperProps> = ({ dataMessages }) => {

    const { currentTime } = useAudioStore()

    return (
        <IMessageMapperContainer>
            <>
                {dataMessages.map((message: ITranscribedMessage) => {
                    return (
                        currentTime > message.start && <MessageCard
                            key={message.id}
                            cardData={message}
                        />
                    )
                })}
            </>
        </IMessageMapperContainer>
    )
}