import { FC } from "react";
import { IInputFileContainerProps } from "./types";


export const InputFileContainer:FC<IInputFileContainerProps> = ({children}) => {
   return(
    <div>
        {children}
    </div>
   )
};