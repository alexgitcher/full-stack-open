import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];

  return (
    <div>
      <Part title={part1.name} exercises={part1.exercises}/>
      <Part title={part2.name} exercises={part2.exercises}/>
      <Part title={part3.name} exercises={part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root')
);

