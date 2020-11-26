import React, {useState, useCallback} from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfo from './components/MissionInfo';

function App() {
 const [id, setId] = useState(42);
 const handleIdChange =  useCallback(
   (newId) => {
     setId(newId);
   },
   [],
 )

  return (
    <div className="App">
      <MissionContainer handleIdChange={handleIdChange}/>
      <MissionInfo id={id}/>
      
    </div>
  );
}

export default App;
