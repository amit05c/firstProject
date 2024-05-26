  /* eslint-disable react-native/no-inline-styles */
  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   */

  import React, { useState } from 'react';
  import {Text, View} from 'react-native';
  import Cats from './src/components/Cats';
import TodoItem from './src/components/Todo';

  // const Cats = () => {
  //   return (
  //     <View>
  //       <Text>Hello</Text>
  //     </View>
  //   );
  // };

  type Todos = {
    id: number;
    title: string;
    completed: boolean;
  };

  function App(): React.JSX.Element {
    const [todos,setTodos]= useState<Todos[]>([
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 2, title: 'Build a React app', completed: true },
    ])
    return (
      <View>
        <Text>Todo App</Text>
        {/* <Cats /> */}
        {todos.map(todo=>(
          // <Text key={todo.id}>{todo.title}</Text>
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </View>
    );
  }

  export default App;
