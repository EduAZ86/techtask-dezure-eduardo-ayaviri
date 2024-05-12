
import { ReactNode } from "react";

export interface IInputFileContainerProps {
    children: ReactNode;
}

export interface IAddFileButtonProps {
    handleClick: () => void;
}

export interface IInputFileProps {
    handleFileChange: ChangeEventHandler<HTMLInputElement>;
}