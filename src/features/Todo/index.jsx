import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature() {
    const initTodoList = [
        {
            id: '1',
            title: 'Eat',
            status: 'New',
        },
        {
            id: '2',
            title: 'Code',
            status: 'New',
        },
        {
            id: '3',
            title: 'Sleep',
            status: 'Completed',
        },
    ];
    
    const [todoList,setTodoList] = useState(initTodoList);
    const [filterStatus,setFilterStatus] = useState('all');

    const handleTodoClick = (todo,idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo,idx);
        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'New' ? 'Completed':'New',
        };
        // newTodoList[idx] = newTodo;
        //update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
     }

    const handleShowCompletedClick = () => { 
        setFilterStatus('Completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('New');
     }

     const renderTodoList = todoList.filter(todo => filterStatus ==='all' || filterStatus === todo.status )
     console.log(renderTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} ></TodoList>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;