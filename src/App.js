import React,{useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [users, setUser] = useState([
    {name:"GOku", message:"hello this is D-D", likes:45},
    {name:"Gohan", message: "piccolo is not whis", likes:45},
    {name:"Vegeta", message:"Clownnnnnnn", likes:45}
  ])



 return (
    <div className="app" >
    
     {users.map(user => (
       <Tweet name={user.name} message={user.message} likes={user.likes}/>
     ))}
    </div>
  );
}

export default App;