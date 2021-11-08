import React from 'react'

const Adder = ({addName, newName, onChangeNameHandler, newPhone, onChangePhoneHandler}) =>{


    return(
        <>
            <h2>Add a new</h2>
            <form onSubmit={addName}>
                <div>
                    name:  <input value={newName} onChange={onChangeNameHandler}/>
                </div>

                <div>
                    phone: <input value={newPhone} onChange={onChangePhoneHandler}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Adder