const TodoData =(prosp) => {
      console.log("check", prosp)

      const {name, age, data} = prosp;
      return(
            <div className='todo-data'>
          <div>danh sách todo1 {name}</div>
          <div>danh sách todo2</div>
        </div>
      )
}

export default TodoData;