import { useState } from "react";

const TodoNew = (props) => {

    
    const [valueInput, setValueInput] = useState("")

    const { addNewTodo } = props;

    const handleClick = () => {
      addNewTodo(valueInput)
      setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            value={valueInput}/>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Thêm mới</button>
            <div>
                Kết quả = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;