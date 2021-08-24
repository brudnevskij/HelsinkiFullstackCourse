import React from 'react'
import Person from "./person/Person";

const Numbers = ({persons, filterP, deleteHandler}) => {
    persons = persons.filter(person =>{
        if(person.name.toLowerCase().includes(filterP.toLowerCase())){
            return person
        }
        return null;
    } )
    return (
        <>
            <ul>
                {persons.map((person, id = 0) => {
                        id++;
                        return(
                            <li key={id}><Person id={id} name={person.name} phone={person.number} deleteHandler={deleteHandler}/></li>
                        );
                    }
                )}
            </ul>
        </>
    )
}


export default Numbers