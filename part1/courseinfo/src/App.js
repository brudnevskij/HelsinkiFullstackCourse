import React from 'react'


const Header = (props) => {
    return (
        <>
            <h1>{props.nameOfCourse}</h1>
        </>
    );
}

const Part = ({name, exe}) => {
    return (
        <>
            <p>{name} : {exe}</p>
        </>
    );
}

const Content = ({exer}) => {


    return (
        <>
            {exer.map(item => {
                return (
                    <Part key={item.name} name={item.name} exe={item.exe}/>
                );
            })}
        </>
    );
}

const Total = ({exer}) => {
    const n = exer.reduce((acc, item) => acc + item.exe, 0)
    return (
        <>
            <p>Number of exercises: {n}</p>
        </>
    );
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const exercises = [
        {
            name: 'Fundamentals of React',
            exe: 10
        },
        {
            name: 'Using props to pass data',
            exe: 7
        },
        {
            name: 'State of a component',
            exe: 14
        }
    ]

    return (
        <div>
            <Header nameOfCourse={course}/>
            <Content exer={exercises}/>
            <Total exer={exercises}/>
        </div>
    )
}

export default App