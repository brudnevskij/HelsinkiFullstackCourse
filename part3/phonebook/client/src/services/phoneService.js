import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons"

const getAll = () =>{
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const addNew = (contact) =>{
    const req = axios.post(baseUrl, contact)
    return req.then(res => res.data)
}

const deleteContact = (id) =>{
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(res => res.data)
}

const changeNumb = (id, contact) =>{
    const req = axios.put(`${baseUrl}/${id}`, contact)
    return req.then(res => res.data)
}
export  {getAll, addNew, deleteContact, changeNumb}