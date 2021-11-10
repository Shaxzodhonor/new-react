import './App.scss';
import Calculator from './calculator/calculator';

function App() {
const users =[{name:"olim", age: 1},{name:"olima", age: 11}]

  return (
    <>
      <Calculator users = {users} />
    </>
  );
}

export default App;
