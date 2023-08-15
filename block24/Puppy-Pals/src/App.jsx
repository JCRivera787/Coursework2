import { useState } from 'react'  //React intelligently reflect the updated data. To use this feature of a React component, use the useState hook.
import './App.css'
import { puppyList } from './data'; // Imports puppys List array from data.js


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup); 

  return (
    <>
      <div className="App">
        <h1>Block - 24 Workshop: Puppy Pals</h1>
        { 
          puppies.map((puppy)=> {
            return <p onClick = {()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
         })
       }
       {featPupId && <p> {featPupId}</p> }
     </div>

     {featPupId && (
       <div>
        <h2>{featuredPup.name}</h2>
          <ul>
            <li><em>Age:</em> {featuredPup.age}</li>
            <li><em>Email:</em> {featuredPup.email}</li>
         </ul>
       </div>
     )} 
    </>
        );// closing from the return 
 }  //closing curly

export default App
