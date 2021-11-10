import { useState } from "react";
import "./Calculator.scss";

function Calculator(){

  const [list, setList] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []);
  localStorage.setItem('items', JSON.stringify([...list]));

  function addItem(ev){
    if (ev.keyCode === 13){
      
      const todo = {
        id: list.at(-1) ? list.at(-1).id + 1 : 1,
        value: ev.target.value,
        isCompleted: false,
      };
      
      setList([...list, todo]);
      ev.target.value = null;
      
    }
  };

    return (
        <>
        <input type="text" onKeyUp={addItem} />
           {list.length > 0 && 
            <ul>
              {list.map(todo =>(
                <li key={todo.id}>
                  <input 
                    type="checkbox" 
                    checked={todo.isCompleted}
                    onChange={() => {
                      
                     todo.isCompleted = !todo.isCompleted;
                     setList([...list]);
                  } }
                  />
                  {
                    todo.isCompleted
                    ? <del>{todo.value}</del>
                    : todo.value
                  }
                  <button onClick={function(){
                   setList( list.filter(
                     (item) => item.id !== todo.id
                  ))
                  }}>&times;</button>
                  </li>
              ))}
              </ul>
            }
        </>
    )
}
export default Calculator;