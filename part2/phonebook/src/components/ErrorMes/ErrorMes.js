import React from "react"




const ErrorMes = ({message}) =>{
    if(message === null){
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}


export default ErrorMes