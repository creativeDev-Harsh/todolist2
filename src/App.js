
import { useState } from 'react';
import './App.css';

function App() {

  let [toDoList, setToDoList] = useState([]);

  let saveToDoList = (event) => {

    event.preventDefault();

    let toName = event.target.toName.value;

    if (!toDoList.includes(toName)) {

      let finalToDoList = [...toDoList, toName];
      setToDoList(finalToDoList);

      event.target.toName.value = '';
    }
    else {
      alert("To Do Name Already Exists....");
    }
  };

  return (
    <div className="App">
      <h1>TO Do List</h1>

      <form onSubmit={saveToDoList}>
        <input type="text" name="toName" />
        <button>Save</button>
      </form>

      <div className="list">
        <ul>
          {
            toDoList.map((value, index) => {
              return (
                <ToDoListItem
                  key={index}
                  value={value}
                  itemIndex={index}
                  toDoList={toDoList}
                  setToDoList={setToDoList}


                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;


function ToDoListItem({ value, itemIndex, toDoList, setToDoList }) {

  let deleteItem = (event) => {
    event.stopPropagation();
    let findList = toDoList.filter((v, i) => i !== itemIndex);

    setToDoList(findList);
  };

  let [status,setStates]=useState(false)

  let chakeStatus = () =>{
    setStates(!status)
  }

  return (
    <li className={(status)? 'compliteToDo' : ''}
    onClick={chakeStatus}>
      {value}
      <span onClick={deleteItem}>&times;</span>
    </li>
  );
}
