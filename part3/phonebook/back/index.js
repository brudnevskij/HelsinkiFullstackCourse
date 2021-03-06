const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// morgan(function (tokens, req, res) {
//     return [
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens.res(req, res, 'content-length'), '-',
//         tokens['response-time'](req, res), 'ms'
//     ].join(' ')
// })

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan((tokens, req, res) => {
    if (tokens.method(req, res) === "POST") {
        return [tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens.body(req, res)
        ].join(' ')
    }
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}));
// app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body '));

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get("/info", (req, res) => {
    const date = new Date();
    res.send(`<p>Phonebook has info about ${persons.length} people</p><p>${date}</p>`)
})

app.get("/api/persons", (req, res) => {

    res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find((person) => person.id == id)
    if (person)
        res.json(person)
    else
        res.status(404).end()
})

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return Math.floor(Math.random() * (99999 - maxId + 1) + maxId);
}

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(pers => pers.id !== id)
    res.status(204).end()

})

app.post("/api/persons", (req, res) => {
    const body = req.body
    if (!body.number) {
        return res.status(400).json({
            error: 'no phone number'
        })
    }
    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    res.json(persons)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`server running on a port ${PORT}`)
})