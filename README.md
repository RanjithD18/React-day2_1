## React Day-2

### App.js:
~~~
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
~~~~
### App.css:
~~~
.App {
  text-align: center;
}

.App-logo {
  padding-top: 20px;
  height: 10vmin;
  pointer-events: none;
}

.name{
  font-size:x-large;
}
.reg{
  font-size:medium;
}

.Container{
  margin: 200px;
  margin-left: 450px;
  height: 300px;
  width: 600px;
  /* border: 2px solid; */
  border-radius: 8px;
  background-color: #fff;
}

.App-link {
  color: #61dafb;
}

button{
  height: 40px;
  width: 100px;
  border:0px;
  background-color: aqua;
  border-radius: 8px;
}

~~~
### Output:
https://ranjithd18.github.io/React-day2_1/

![image](https://github.com/RanjithD18/React-day2_1/assets/93427221/8d2b9b42-9d35-4c9f-980c-52083da07db0)
![image](https://github.com/RanjithD18/React-day2_1/assets/93427221/8029ee03-cbfe-4ced-b36c-fcc5c453d230)

