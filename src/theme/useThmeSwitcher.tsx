'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const [icon, setIcon] = useState(null);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }

        setIcon(null);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return { theme, handleTheme }
}