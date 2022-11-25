import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function pressButton(nr){
    setCount(count = nr);
  }
  

  return (
    <div className="App">
      <div className="Header">
        <div className="Header-Title">
          <b>Online Stealing</b>
        </div>

        <input className='Search' type={"text"} placeholder="Search for anything on the store"></input>

        <div className='Pages'>
          <a className='Header-Button' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>My account</a>
          <a className='Header-Button' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>My favorites</a>
          <a className='Header-Button' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>My basket</a>
        </div>
      </div>

      <div className="Main-Body">
        <div className="Side-Bar">
          <button onClick = {pressButton} className="Side-Element">Nature</button>
          <button className="Side-Element">People</button>
          <button className="Side-Element">Animals</button>
          <button className="Side-Element">Furniture</button>
          <button className="Side-Element">Arhitecture</button>
          <button className="Side-Element">Landscapes</button>
          <button className="Side-Element">Weapons</button>
        </div>
        <button className="Highlights">
          <img href=""></img>
        </button>
      </div>
    </div>
  );
}

export default App;
