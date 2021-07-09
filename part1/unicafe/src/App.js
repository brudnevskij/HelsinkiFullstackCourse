import React, {useState} from 'react'

const Statistic = ({text, value}) => {
    return (
        <tr>
            <th>{text}:</th>
            <th>{value}</th>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100
    const data = [
        {
            name: "good",
            value: good
        },
        {
            name: "neutral",
            value: neutral
        },
        {
            name: "bad",
            value: bad
        },
        {
            name: "all",
            value: all
        },
        {
            name: "average",
            value: average
        },
        {
            name: "positive",
            value: positive
        },
    ]
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <>
            <h1>Statistics</h1>
            <table><tbody>
            {data.map((item) => <Statistic text={item.name} value={item.value} key={item.name}/>)}
            </tbody>
            </table>
        </>
    )
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App