import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  }
  return (
    <div className="todo-app">
      <form className="todo-form" onSubmit={handleSubmit}>
       <input 
       type='text'
       placeholder='Tulis disini'
       value={input}
       className='todo-input'
       onChange={handleChange}
       />
      <button className='todo-button'>+</button>
      </form>
    </div>
  )
}

export default TodoForm
