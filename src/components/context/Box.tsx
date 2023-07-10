import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContext)// надо понимать что типы данных для theme typescript установит автоматически
    return <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme context</div>
}