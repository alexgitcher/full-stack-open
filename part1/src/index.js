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
      <Part title={part1.title} exercises={part1.exercises}/>
      <Part title={part2.title} exercises={part2.exercises}/>
      <Part title={part3.title} exercises={part3.exercises}/>
    </div>
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

