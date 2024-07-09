import logo1 from './logo1.svg';
import './App.css';

function App() {
  let n=0;
  const handleDetail=()=>{
    if(n%2===0){
      document.getElementById("id1").innerHTML="Additional details or content can go here..."
      document.getElementById("id2").innerHTML="Hide Detail"
    }
    else{
      document.getElementById("id1").innerHTML=""
      document.getElementById("id2").innerHTML="Show Detail"
    }
    n++;
  }
  return (
    <div className="App">
      <div className='Container'>
        <img src={logo1} className="App-logo" alt="logo" />
        <p className='name'><strong>Name: Ranjith D</strong><p className="reg">Register Number: 212221240044</p>
        </p>
        <button id="id2" onClick={handleDetail}>Show Details</button>
        <div id="id1"></div>
        </div>
    </div>
  );
}

export default App;
