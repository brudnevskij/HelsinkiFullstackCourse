import React from 'react'


const Header = ({course}) => {
    return (
        <>
            <h1>{course.name}</h1>
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

const Content = ({course}) => {


    return (
        <>
            {course.parts.map(item => {
                return (
                    <Part key={item.name} name={item.name} exe={item.exe}/>
                );
            })}
        </>
    );
}

const Total = ({course}) => {
    const n = course.parts.reduce((acc, item) => acc + item.exe, 0)
    return (
        <>
            <p>Number of exercises: {n}</p>
        </>
    );
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default App