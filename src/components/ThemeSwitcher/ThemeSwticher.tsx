'use client'
import { FC } from "react"
import { ThemeSwitcherContainerButton } from "./styles.tw"
import { useThemeSwitcher } from "@/theme/useThmeSwitcher"

export const ThemeSwitcher: FC = () => {
    const { handleTheme, theme } = useThemeSwitcher()
    return (
        <ThemeSwitcherContainerButton
            handleClick={handleTheme}
            theme={theme ? theme : 'light'}
        />
    )
}