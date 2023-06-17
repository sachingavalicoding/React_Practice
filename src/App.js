import './App.css';
const friends = [
  {
    key: 1,
    name: "Sachin",
    age:20,
    pass:true
  },
  {
    key: 2,
    name: "Nikhil",
    age:25,
    pass:true
  },
  {
    key:3,
    name:"Rahul",
    age:19,
    pass:false
  }

];
function App() {
  const listItems = friends.map(e =>
    <li key={e.key}
     style ={{
        color : e.pass === true ? 'green' : 'red',
        backgroundColor: e.age <= 20 ? 'blue' : 'black',
        padding:e.key <= 5 ? '30px 50px' : '0px'
     }}
     >
      {e.name}
    </li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default App;
