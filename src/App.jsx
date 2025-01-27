import './components/todo/style.css';
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import LogoReact from "./assets/react.svg"

const App = () => {

  const name = "minhxinhtrai"
  const age = 19;
  const data = {
      address: "nghe an",
      city : "avc"
   }

  return (
    <div className="todo-container">
      <div className="todo-title">Minhxinhtrai</div>
    <TodoNew/>
    <TodoData 
      name ={name}
      gae={age}
      data={data}
    />

    <div className='img-data'>
      <img className='logo' src={LogoReact}/>
    </div>
       
    </div>
  )
}

export default App
