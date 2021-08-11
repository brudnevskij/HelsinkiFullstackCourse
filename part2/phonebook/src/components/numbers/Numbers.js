import React from 'react'
import Person from "./person/Person";

const Numbers = ({persons, filterP}) => {
    persons = persons.filter(person =>{
        if(person.name.toLowerCase().includes(filterP.toLowerCase())){
            return person
        }
        return null;
    } )
    return (
        <>
            <ul>
                {persons.map((person, id = -1) => {
                        id++;
                        return(
                            <li key={id}><Person  name={person.name} phone={person.phone}/></li>
                        );
                    }
                )}
            </ul>
        </>
    )
}


export default Numbers