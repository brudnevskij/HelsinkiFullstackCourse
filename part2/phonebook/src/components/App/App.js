import React, {useState, useEffect} from 'react'
import Numbers from "../numbers/Numbers";
import Adder from "../adder/Adder";
import Search from "../search/Search";
import {getAll, addNew, deleteContact, changeNumb} from "../../services/phoneService";
const App = () => {
    const [reload, setReload] = useState(false)
    const [persons, setPersons] = useState([

    ])
    useEffect(() =>{
        getAll()
            .then(newPersons =>{
                setPersons(newPersons)
            })
    }, [reload])
    const [newName, setNewName] = useState('')
    const onChangeNameHandler = (event) => {
        setNewName(event.target.value)
    }
    const deleteHandler = (id, name) =>{
        if(window.confirm(`Do you want to delete ${name} from your contacts?`)){
            deleteContact(id)
            setReload(!reload)
        }
    }
    const addName = (event) => {
        event.preventDefault()
        if (persons.find(element => element.name === newName) !== undefined) {
            const guy = persons.find((element) =>element.name === newName)
            if(window.confirm(`You want to change a number for ${guy.name}`)){
                const newNameObj = {
                    name: newName,
                    number: newPhone
                }
                changeNumb(guy.id, newNameObj)
                alert(`${guy.name} changed number to ${newNameObj.number}`);
                setNewName('')
                setNewPhone('')
                setTimeout(()=>{setReload(!reload)}, 1000)
                return
            }
            return
        }
        const newNameObj = {
            name: newName,
            number: newPhone
        }
        setPersons(persons.concat(newNameObj))
        addNew(newNameObj)
        setNewName('')
        setNewPhone('')
        setTimeout(()=>{setReload(!reload)}, 1000)
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
            <Numbers persons={persons}  filterP={newFilter} deleteHandler={deleteHandler}/>

        </div>
    )
}

export default App