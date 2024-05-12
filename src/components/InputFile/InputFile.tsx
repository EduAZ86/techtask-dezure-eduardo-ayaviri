'use client'
import { FC, useRef } from "react";
import { AddFileButton, InputFileContainer } from "./styles.tw";
import { IInputFileProps } from "./types";

export const InputFile: FC<IInputFileProps> = ({ handleFileChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Simula el clic en el input de tipo file
        }
    };

    return (
        <InputFileContainer>
            <input
                type="file"
                ref={fileInputRef}
                accept="audio/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
            <AddFileButton
                handleClick={handleButtonClick}
            />
        </InputFileContainer>
    )
}
