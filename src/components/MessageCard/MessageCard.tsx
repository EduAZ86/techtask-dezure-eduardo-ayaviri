import { FC } from "react";
import { Typography } from "../Typography";
import { IMessageCardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { MessageCardContainer, MessageContainer, StartTimeMessageContainer, UserIconContainer, } from "./styles.tw";


export const MessageCard: FC<IMessageCardProps> = ({ cardData }) => {
    return (
        <MessageCardContainer role={cardData.role}>
            <UserIconContainer role={cardData.role}>
                <FontAwesomeIcon icon={cardData.role === 'user' ? faUser : faUserCircle} />
            </UserIconContainer>
            <MessageContainer role={cardData.role} >
                <Typography variant="paragraph" >{cardData.content}</Typography>
            </MessageContainer>
            <StartTimeMessageContainer >
                <Typography variant="secundaryText">{cardData.start}</Typography>
            </StartTimeMessageContainer>
        </MessageCardContainer>
    )
}