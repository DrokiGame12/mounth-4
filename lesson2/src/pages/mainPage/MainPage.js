import React from 'react';
import './MainPage.css'

const MainPage = () => {
    const list = [ 
        {
            id:1 , 
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }
    ]

    return (
        <div className='list'>
            { list.map(item => {
                if(!item.completed){
                    return(
                        <div className='item'>
                            <p>{item.id} {item.title}</p>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default MainPage;