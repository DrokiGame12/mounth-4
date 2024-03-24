import React from 'react';
import classes from './Pagination.module.sass';
import Button from '../button/Button';


const Pagination = ({prev, next, page}) => {
    return (
        <div className={classes.pagination}>
            <Button action={prev} title={'prev'}/>
            <h2>{page}</h2>
            <Button action={next} title={'next'}/>
        </div>
    );
};

export default Pagination;