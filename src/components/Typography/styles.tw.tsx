'use client'
import { ITypographyProps } from "./types";
import { FC } from 'react'


export const Title: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-2xl md:text-4xl            
            font-roboto  
            `
            }
        >
            {children}
        </h2>
    );
};

export const SubTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-xl leading-tight tracking-tighter  m-0 
            font-roboto
    
          
            `
            }
        >
            {children}
        </h2>
    );
};

export const SecundaryText: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h3
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm
            text-light-secundary-text dark:text-dark-text
            font-roboto
            m-0
            `}
        >
            {children}
        </h3>
    );
};


export const Paragraph: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textSize }) => {
    return (
        <p
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            ${textSize ? textSize : 'text-sm'}
            font-roboto
             m-0               
             `
            }
        >
            {children}
        </p>
    );
};

export const TextError: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <span
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm 
            font-inter 
            m-0
            text-red-800 dark:text-red-500
            `}
        >
            {children}
        </span>
    );
};

export const TextButton: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <span
            className={`
        md:${align} ${bold ? 'font-bold' : 'font-light'} 
        text-sm
        font-roboto
  
        `}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <label
            className={`
        md:${align} ${bold ? 'font-bold' : 'font-light'} 
        text-sm 
        font-roboto    
        cursor-pointer
        `}
        >
            {children}
        </label>
    );
};