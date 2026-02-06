import React from 'react';
import { TodoItem, TodoContent, TodoLeft, Checkbox, TodoText, DeleteButton } from './styles/StyledComponents';

const TodoComponent = ({ todo, onToggle, onDelete }) => {
  return (
    <TodoItem completed={todo.completed}>
      <TodoContent>
        <TodoLeft>
          <Checkbox
            checked={todo.completed}
            onClick={() => onToggle(todo._id)}
            aria-label="Toggle todo completion"
          >
            {todo.completed && (
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </Checkbox>
          
          <TodoText completed={todo.completed}>
            <p>{todo.text}</p>
            <small>
              {new Date(todo.createdAt).toLocaleDateString()} at{' '}
              {new Date(todo.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </small>
          </TodoText>
        </TodoLeft>
        
        <DeleteButton
          onClick={() => onDelete(todo._id)}
          aria-label="Delete todo"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </DeleteButton>
      </TodoContent>
    </TodoItem>
  );
};

export default TodoComponent;
