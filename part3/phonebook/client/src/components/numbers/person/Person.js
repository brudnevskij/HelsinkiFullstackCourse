import React from 'react'

const Person = ({name, phone, id, deleteHandler}) => {

    return(
        <>
        Name: {name}, Phone: {phone} <button onClick={() =>{deleteHandler(id, name)}}>delete</button>
        </>
    )
}

export default Person