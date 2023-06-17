import './App.css';
import { useState} from 'react';
function App() {
  const [count , setCount] = useState(0);
  const add = ()=>{
    setCount(count + 1 );
  }
  const sub = ()=>{
    setCount(count - 1 );
  }
  return (
   <div className='main'>
       <button onClick={add}
        style={{
          padding:'20px 30px',
          color:'red',
          backgroundColor:'black',
          border:'none',
          borderRadius:'10px',
          fontSize:'50px'
        }}
        >  + </button>
        <span>{count} </span>
       <button onClick={sub}
        style={{
          padding:'20px 30px',
          color:'red',
          backgroundColor:'black',
          border:'none',
          borderRadius:'10px',
          fontSize:'50px'
        }}
        >  - </button>
   </div>
  );
}

export default App;
