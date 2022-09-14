import './App.css';
import { useState } from 'react';
import { Users } from './users';

function App() {
  const [query, setQuery] = useState('');

  //TODO: Add a state variable to hold the filtered users

  //console.log(query);
  console.log(Users.filter(user => user.first_name.toLowerCase().includes("sol")));
  return (
    <div className="app">
      <input
        type="text"
        placeholder='search'
        className='search'
        onChange={e => setQuery(e.target.value)}
      />
      <ul className='list'>
        {Users.filter(user => user.first_name.toLowerCase().includes(query.toLowerCase())).map(user => (
          <li className='list-items' key={user.id}> {user.first_name}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;




