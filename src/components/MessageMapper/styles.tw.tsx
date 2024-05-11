import { FC } from "react";
import { IMessageMapperContainerProps } from "./type";

export const IMessageMapperContainer: FC<IMessageMapperContainerProps> = ({ children }) => {
    return (
        <div
            className={`
                w-full h-fit
                flex relative
                flex-col
                bg-light-background dark:bg-dark-background
                p-3
                gap-3
                rounded-2xl
            `}
        >
            {children}
        </div>
    )
}