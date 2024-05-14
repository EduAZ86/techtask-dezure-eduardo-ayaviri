import { FC } from "react";
import { Typography } from "../Typography";
import { IMessageCardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { MessageCardContainer, MessageContainer, StartTimeMessageContainer, UserIconContainer, } from "./styles.tw";
import { formatTime } from "@/utils/formatTime";
import { useAudioStore } from "@/zustand/useAudioStore";

export const MessageCard: FC<IMessageCardProps> = ({ cardData }) => {

    const { setCurrentTime, audio } = useAudioStore()

    const handleClick = () => {
        setCurrentTime(cardData.start)
        if (audio) {
            const newTime = parseFloat(cardData.start.toString());
            audio.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }

    return (
        <MessageCardContainer role={cardData.role}>
            <UserIconContainer role={cardData.role}>
                <FontAwesomeIcon icon={cardData.role === 'user' ? faUser : faUserCircle} />
            </UserIconContainer>
            <MessageContainer role={cardData.role} handleClick={handleClick} >
                <Typography variant="paragraph" >{cardData.content}</Typography>
            </MessageContainer>
            <StartTimeMessageContainer >
                <Typography variant="secundaryText">{formatTime(cardData.start)}</Typography>
            </StartTimeMessageContainer>
        </MessageCardContainer>
    )
}