import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";

type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    const theme = useContext(ThemeContext)
    return <h2 style={{backgroundColor: theme.secondary.main, color: theme.secondary.text}}>{props.children}</h2>
}