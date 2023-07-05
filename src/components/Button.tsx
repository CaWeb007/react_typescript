import React from "react";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}

export const Button = (props: ButtonProps) => {
    return (
        //<button onClick={props.handleClick}>Click</button>
        <button onClick={(event) => props.handleClick(event, 'prosto knopka')}>Click</button>
    );
};
