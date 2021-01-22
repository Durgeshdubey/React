import React,{useState} from 'react';
import Tweet from './Tweet';

function App(){

//  const [isRed, setRed] =  useState(false);
//  const [count, setCount] = useState(0);

  
//  const Increment = () => {
//    setCount(count+1);
//    setRed(!isRed)
  const [users, setUser] = useState([
    {name:"GOku", message:"hello this is D-D", likes:45},
    {name:"Gohan", message: "piccolo is my dad", likes:45},
    {name:"Vegeta", message:"Clownnnnnnn", likes:45}
  ])



 return (
    <div className="app" >
      {/* <h1 className={isRed ? 'red' : ''}>change my color</h1> */}
     {/* <Tweet name="Goku"   message="This is a JOke" likes="200" />
     <Tweet name="Vegeta" message="This is a Clown" likes="101" />
     <Tweet name="Gohan"  message="This is a 12 supersayian" likes="110" />
     <Tweet name="Trunks" message="Slash fieiza from middle" likes="210" /> */}
{/* 
     <button onClick={Increment}>Increment</button>
     <h1>{count}</h1> */}
     {users.map(user => (
       <Tweet name={user.name} message={user.message} likes={user.likes}/>
     ))}
    </div>
  );
}

export default App;