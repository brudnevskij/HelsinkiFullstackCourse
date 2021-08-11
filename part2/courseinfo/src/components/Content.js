import React from 'react'
import Part from "./Part";
import Total from "./Total";

const Content = ({parts}) => {

    return (
        <>
            {parts.map(part => {
                return (
                    <Part key={part.id} name={part.name} exe={part.exercises}/>
                );
            })}
            <Total parts={parts}/>
        </>
    );
}

export default Content