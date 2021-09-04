import React from 'react'



const Search = ({newFilter, onChangeFilterHandler}) => {
    return(
        <>
            <form>
                <div>
                    Search: <input value={newFilter} onChange={onChangeFilterHandler}/>
                </div>
            </form>
        </>
    )
}



export default Search