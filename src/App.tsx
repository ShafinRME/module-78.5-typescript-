import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'Jolly';
let age: number = 69;
let isSmart: boolean = true;

let students: string[] = ['Joe', 'Biden', 'Harris'];

let fees: number[] = [12, 12, 122, 1233, 223, 45];

interface Person {
  name: string,
  job?: string,
  employed: string | boolean,
  age: number,
  location?: string | number
}

const person: Person = {
  name: 'Shafin',
  employed: true,
  job: 'Jobles',
  age: 85,
  location: 55
}

const handleUser = (firstName: string, age: number, address: string): number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return age;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
