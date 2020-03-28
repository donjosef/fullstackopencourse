import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((acc, current) => acc + current.exercises, 0);

    return (
        <p>Number of exercises {total}</p>
    )
}

const Course = ({ course }) => {
    return (
        <section>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </section>
    )
}

export default Course;