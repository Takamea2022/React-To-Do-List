import React, {useState} from 'react';

function TodoList() {

  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTast] = useState("");

  function handleInputChange(event) {
    setNewTast(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTast("");
    }
    
  }

  function deleteTask(index) {
    setTasks(t => t.filter((_, i) => i !== index));
  }


  // moveTaskup is using destructuring, destructure the index
  function moveTaskUp(index) {
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) { 
    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function handleKeydown(event) {
    if(event.key === "Enter") {
      addTask();
    }
  }

  return(
    <>
      <div className='to-do-list'>
        <h1>To-Do-List</h1>
        
        <div>
          <input
          type="text"
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeydown}
          />

          <button
           className='add-button'
           onClick={addTask}
           
           >Add
           </button>

        </div>

        <ol>
          {tasks.map((task, index) => 
            <li 
              key={index}
            ><span className='text'>{task}</span>

              <button
                className='delete-button'
                onClick={() => deleteTask(index)}
                >Delete
              </button>

              <button
                className='move-button'
                onClick={() => moveTaskUp(index)}
                >☝️
              </button>

              <button
                className='move-button'
                onClick={() => moveTaskDown(index)}
                >👇
              </button>

            </li>
          )}
        </ol>

      </div>
    </>
  )
}

export default TodoList;