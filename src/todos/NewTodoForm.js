import React, { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Type your new TODO here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}>
            </input>
            <button className="new-todo-button" >Create Todo</button>
        </div>
    )
    
}

export default NewTodoForm;
