import { ReactNode } from "react";

export interface IAudioPlayerContainerProps {
    children: ReactNode;
}

export interface ITitleAudioContainerProps {
    children: ReactNode;
}

export interface IButtonsContainerProps {
    children: ReactNode;
}

export interface IControlButtonProps {
    play?: boolean;
    type: 'playpause' | 'stop';
    handleClick: () =>  void;
}

export interface IAudioControllerContainerProps {
    children: ReactNode;
};

export interface IProgressionBarProps {
    currentTime: number;
    handleSeek: ChangeEvent<HTMLInputElement>
    duration: number;
}
