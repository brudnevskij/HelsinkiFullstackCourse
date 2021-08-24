import React from 'react'



const Search = ({newFilter, onChangeTar}) => {
    return(
            <form>
                <>
                Search for countries: <input value={newFilter} onChange={onChangeTar}/>
                </>
            </form>
    )
}


export default Search;