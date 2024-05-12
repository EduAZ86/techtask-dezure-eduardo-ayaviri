import { FC } from "react";
import { IAddFileButtonProps, IInputFileContainerProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export const InputFileContainer: FC<IInputFileContainerProps> = ({ children }) => {
    return (
        <div
            className="h-10 w-fit flex justify-center items-center px-1"
        >
            {children}
        </div>
    )
};

export const AddFileButton: FC<IAddFileButtonProps> = ({ handleClick }) => {
    return (
        <button
            className={`
                w-8 h-8
                rounded-full
                text-light-primary
                bg-dark-shadow dark:bg-light-shadow
            `}
            onClick={handleClick}
            type="button"
        ><FontAwesomeIcon icon={faPlus} /></button>
    )
}