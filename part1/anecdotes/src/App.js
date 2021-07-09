import React, {useState} from 'react'

const ButtonNext = (props) => {
    return (
        <>
            <button onClick={props.random}>Next</button>
        </>
    )
}
const ButtonVote = ({selected, vote}) => {
    return (
        <>
            <button onClick={() => vote(selected)}>Vote</button>
        </>
    )
}

const Display = ({anecdotes, selected}) => {
    return (
        <>
            {anecdotes[selected]}
        </>
    )
}

const DisplayMost = ({votes, anecdotes}) => {
    if (votes[0] === 0 && votes[1] === 0 && votes[2] === 0 && votes[3] === 0 && votes[4] === 0 && votes[5] === 0 && votes[6] === 0){
        return (
            <>
            <h1>No votes given</h1>
            </>
        )
    }
    let temp = 0
    let oKey = 0
    for(let key in votes){
        if(votes[key] > temp){
            temp = votes[key]
            oKey = key
        }
    }

    return (
            <>
                <h1>Anecdote with most votes</h1>
                {anecdotes[oKey]}
            </>
        )
}

const App = () => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0
    })
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const randomSeter = () => {
        setSelected(getRandomInt(anecdotes.length))
    }

    const vote = (n) => {
        setVotes({
            ...votes,
            [n]: votes[n] + 1
        })
    }
    return (
        <div>
            <Display anecdotes={anecdotes} selected={selected}/>
            <br/>
            <ButtonNext random={randomSeter}/>
            <ButtonVote selected={selected} vote={vote}/>
            <DisplayMost votes={votes} anecdotes={anecdotes}/>
        </div>
    )
}

export default App