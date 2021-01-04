import React, { FC, ReactElement, useCallback, useEffect, useState, useReducer } from 'react'
import Input from './Input'
import List from './List'
import { ACTION_TYPE, IState, ITodo } from './typings'
import todoReducer from "./reducer";
// import { stat } from 'fs';
//其实这里是多包了一层
// const initialState: IState = {
//   todoList: []
// }

function init(initTodoList: ITodo[]): IState {
  return {
    todoList: initTodoList
  }
}
const TodoList: FC = (): ReactElement => {
  const addTodo = useCallback((todo: ITodo): void => {
    console.log(todo);
    // setTodoList(todoList=>[...todoList,todo]

    // console.log(todoList);
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    })
  }, [])

  //创建todolist，初始为空
  // const [todoList, setTodoList] = useState<ITodo[]>([]);

  //state是状态，dispatch就是改变状态的方法
  const [state, dispatch] = useReducer(todoReducer, [], init)

  //这里是只执行一次的
  useEffect(() => {
    let todoList = JSON.parse(localStorage.getItem('todolist') || '[]')
    dispatch({
      type: ACTION_TYPE.INIT_TODOLIST,
      payload: todoList
    })
  }, []);

  //这里的useEffect是要在操作过todolist后自动执行的
  useEffect(()=>{
    localStorage.setItem('todolist',JSON.stringify(state.todoList))
  },[state.todoList])


  const removeTodo = useCallback((id): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    })
  }, []
  )
  const toggleTodo = useCallback((id): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  }, []
  )
  return (
    <div>
      this is TodoList
      <Input
        addTodo={addTodo}
        todoList={state.todoList}
      ></Input>
      <List todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo}></List>
    </div>
  )
}

export default TodoList