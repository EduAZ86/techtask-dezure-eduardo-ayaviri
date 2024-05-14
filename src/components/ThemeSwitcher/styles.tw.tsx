import { FC } from "react";
import { IThemeSticherContainerButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcherContainerButton: FC<IThemeSticherContainerButtonProps> = ({ handleClick, theme }) => {
    const chaflan = '5px';
    return (
        <button
            className={`flex flex-row w-10 h-6 relative
            items-center           
            cursor-pointer  
            overflow-hidden
            `}            
            onClick={handleClick}
        >   
            <span
                className={`
                w-full h-full
                flex flex-row
                absolute top-0 left-0
                bg-light-card  dark:bg-dark-card opacity-65
            
                `}
                style={{clipPath: `polygon(0% 0%, 100% 0% , 100% calc(100% - ${chaflan}), calc(100% - ${chaflan}) 100%, 0% 100%)`}}
            />
            <span 
                className={` 
                w-full h-full
                flex flex-row
                absolute top-0 left-0
                text-base text-light-primary  dark:text-dark-primary text items-center justify-center
                ${theme === 'dark'? '-translate-x-full' : 'translate-x-0'}
                transition-transform duration-500
                `}
            >
                <FontAwesomeIcon icon={faSun} />
            </span>
            <span 
                className={` 
                w-full h-full
                flex flex-row
                absolute top-0 left-0
                text-base dark:text-dark-primary  text-light-primary  text items-center justify-center
                ${theme === 'light'? 'translate-x-full' : 'translate-x-0'}
                transition-transform duration-500
                `}
            >
                <FontAwesomeIcon icon={faMoon} />
            </span>
        </button>
    )
}