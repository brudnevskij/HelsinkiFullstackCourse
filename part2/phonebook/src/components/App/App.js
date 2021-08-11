import React, {useState} from 'react'
import Numbers from "../numbers/Numbers";
import Adder from "../adder/Adder";
import Search from "../search/Search";

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '88888888888'
        }
    ])
    const [newName, setNewName] = useState('')
    const onChangeNameHandler = (event) => {
        setNewName(event.target.value)
    }
    const addName = (event) => {
        event.preventDefault()
        if (persons.find(element => element.name === newName) !== undefined) {
            alert(`${newName} already added to the Phone Book`);
            return
        }
        const newNameObj = {
            name: newName,
            phone: newPhone
        }
        setPersons(persons.concat(newNameObj))
        setNewName('')
        setNewPhone('');
    }
    const[newPhone, setNewPhone] = useState('')
    const onChangePhoneHandler = (event) =>{
        setNewPhone(event.target.value)
    }
    const[newFilter, setNewFilter] = useState('')
    const  onChangeFilterHandler = (event) =>{
        setNewFilter(event.target.value)
    }


        return(
        <div>
            <h2>Phonebook</h2>
            <Search newFilter={newFilter} onChangeFilterHandler={onChangeFilterHandler}/>

            <Adder addName={addName} newName={newName} onChangeNameHandler={onChangeNameHandler} newPhone={newPhone} onChangePhoneHandler={onChangePhoneHandler}/>

            <h2>Numbers</h2>
            <Numbers persons={persons} filterP={newFilter}/>

        </div>
    )
}

export default App