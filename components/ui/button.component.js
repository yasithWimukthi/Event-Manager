import Link from "next/link";
import React from "react";
import classes from './button.module.css';

const Button = props => {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Link href={props.link}>
            <a className={classes.btn}>{props.children}</a>
        </Link>
    )
}

export default Button
