import './App.css';
import React from 'react';

function App() { 
  console.log("hey")
    const TextFile=()=>{
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); 
    element.click()// Required for this to work in FireFox
  }
  return (
    <div className="App" >
     <h1>Should We Blacklist This Website Or Not?</h1>
      <img src={require('./images/maltego.png')} height="100px" width="300px" alt="maltego" />
     <input type="text" id="myInput" placeholder="Enter the website link" />
      <button onClick={TextFile}>Submit</button>
    </div>
  );
}

export default App;

