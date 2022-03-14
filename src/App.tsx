import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import AddToList from './Components/AddToList';
interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Samer S.',
      url: '',
      age: 37,
      note: 'promoted to daddy!'
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList />
    </div>
  );
}

export default App;
