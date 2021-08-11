import React from 'react'

const Total = ({parts}) => {
    const n = parts.reduce((acc, item) => acc + item.exercises, 0)
    return (
        <>
            <p><b>Total of exercises: {n}</b></p>
        </>
    );
}

export default Total