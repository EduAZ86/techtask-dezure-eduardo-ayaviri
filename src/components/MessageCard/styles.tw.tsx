import { FC } from "react";
import { IMessageCardContainerProps, IMessageContainerProps, IStartTimeMessageContainer, IUserIconContainerProps, } from "./types";

export const MessageCardContainer: FC<IMessageCardContainerProps> = ({ children, role }) => {
    return (
        <div
            className={`
                flex relative              
                ${role === 'agent'
                    ? `flex-row-reverse pl-7 md:pl-10`
                    : ` flex-row pr-7 md:pr-10`
                }              
                w-full h-fit
                gap-2
                items-end
            `}
        >
            {children}
        </div>
    )
}

export const MessageContainer: FC<IMessageContainerProps> = ({ children, role, handleClick }) => {
    return (
        <div
            className={`
                flex flex-row
                relative
                rounded-2xl
                ${role === 'agent'
                    ? ` bg-light-primary rounded-br-sm text-light-secundary dark:text-dark-secundary`
                    : ` bg-light-secundary rounded-bl-sm text-light-primary dark:text-dark-secundary`
                }             
                p-4 
                cursor-pointer
                hover:brightness-75
              
            `}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}

export const UserIconContainer: FC<IUserIconContainerProps> = ({ children }) => {
    return (
        <div className={
            `w-fit h-full
            flex flex-row relative
            items-end         
             
            `
        }>
            <span
                className={`
                    flex relative
                    md:w-8 w-8 
                    md:h-8 h-8
                    text-center
                    justify-center
                    text-xl text-light-background                 
                    bg-light-secundary-text
                    p-2
                    rounded-full
                    bottom-0
                `}
            >
                {children}
            </span>
        </div>
    )
};

export const StartTimeMessageContainer: FC<IStartTimeMessageContainer> = ({ children }) => {
    return (
        <div
            className={`
                w-fit h-full                
                 relative
                flex flex-row
                items-center justify-center             
            `}
        >
            {children}
        </div>
    )
}