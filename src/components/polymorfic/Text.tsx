import React from "react";

type TextOwnProp<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}
type TextProp<E extends React.ElementType> = TextOwnProp<E> & 
    Omit<React.ComponentProps<E>, keyof TextOwnProp<E>>

export const Text = <E extends React.ElementType = 'div'>({
        size, color , children, as
    }: TextProp<E>) => {
    const Component = as || 'div'
    return <Component className={`class-with-${size}-${color}`}>{children}</Component>
}