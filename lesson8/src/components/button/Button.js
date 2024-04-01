import React from 'react';
import classes from './Button.module.sass';


const Button = ({title, action}) => {
    return (
        <button onClick={action} className={classes.button}>
            <b>{title}</b>
        </button>
    );
};

export default Button;