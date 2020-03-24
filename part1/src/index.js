import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part => (
      <p key={part.title}>
        {part.title} {part.exercises}
      </p>
    ))
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      title: 'Fundamentals of React',
      exercises: 10,
    },
    {
      title: 'Using props to pass data',
      exercises: 7,
    },
    {
      title: 'State of a component',
      exercises: 14,
    }
  ];
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={totalExercises}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root')
);

