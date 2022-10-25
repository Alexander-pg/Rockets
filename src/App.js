import './App.css';
import {Link} from 'react-router-dom'
import logo from "./components/SpaceX.png"

import Menu from './components/menu';

function App() {
  return (
    <div>
     <div className="App-home">
      
      <Menu />
          <div className="logo"><img  src={logo} /> </div>
    </div> 

<div className="App-falcon9">
      <button className="go"><Link className="link" to="/falcon9">Explore about falcon 9</Link></button>
    </div>

    <div className="App-starship">
      <button className="go"><Link className="link" to="/starship">Explore about Starship</Link></button>
    </div>

    
    </div>
    
  );
}

export default App;
