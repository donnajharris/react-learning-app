import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo item label', () => {
  const todo = {
    id: 1,
    label: 'Learn React',
    completed: false,
  };

  render(
    <Todo
      todo={todo}
      handleUpdateTodo={jest.fn()}
      handleDeleteTodo={jest.fn()}
    />
  );

  const todoLabel = screen.getByText(todo.label);
  expect(todoLabel).toBeInTheDocument();
});

test('renders todo item checkbox', () => {
  const todo = {
    id: 1,
    label: 'Learn React',
    completed: false,
  };

  render(
    <Todo
      todo={todo}
      handleUpdateTodo={jest.fn()}
      handleDeleteTodo={jest.fn()}
    />
  );

  const todoCheckbox = screen.getByLabelText(todo.label);
  expect(todoCheckbox).toBeInTheDocument();
  expect(todoCheckbox.checked).toBe(todo.completed);
});

test('toggles editing mode when clicking Edit', () => {
  const todo = {
    id: 1,
    label: 'Learn React',
    completed: false,
  };

  render(
    <Todo
      todo={todo}
      handleUpdateTodo={jest.fn()}
      handleDeleteTodo={jest.fn()}
    />
  );

  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);

  const todoInput = screen.getByTestId('todo-input');
  expect(todoInput).toBeInTheDocument();
});

test('calls handleUpdateTodo with updated label when Save is clicked', () => {
  const todo = {
    id: 1,
    label: 'Learn React',
    completed: false,
  };

  const handleUpdateTodo = jest.fn();

  render(
    <Todo
      todo={todo}
      handleUpdateTodo={handleUpdateTodo}
      handleDeleteTodo={jest.fn()}
    />
  );

  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);

  const todoInput = screen.getByTestId('todo-input');
  fireEvent.change(todoInput, { target: { value: 'New Label' } });

  const saveButton = screen.getByText('Save');
  fireEvent.click(saveButton);

  expect(handleUpdateTodo).toHaveBeenCalledWith({
    ...todo,
    label: 'New Label',
  });
});

test('calls handleDeleteTodo when Delete is clicked', () => {
  const todo = {
    id: 1,
    label: 'Learn React',
    completed: false,
  };

  const handleDeleteTodo = jest.fn();

  render(
    <Todo
      todo={todo}
      handleUpdateTodo={jest.fn()}
      handleDeleteTodo={handleDeleteTodo}
    />
  );

  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  expect(handleDeleteTodo).toHaveBeenCalledWith(todo.id);
});