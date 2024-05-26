/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, View } from 'react-native';
type Todos = {
    id: number;
    title: string;
    completed: boolean;
  };
  type TodoItemProps = {
    todo: Todos;
  };
const TodoItem:React.FC<TodoItemProps>  = ({todo}) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Text>{todo.completed? 'Completed' : 'Not Completed'}</Text>
      <Text>{todo.id}</Text>
    </View>
  );
};

export default TodoItem;
