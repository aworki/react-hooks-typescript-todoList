import React,{FC} from 'react'
import { ITodo } from '../typings'
import Item from './Item'
interface IProps {
  todoList: ITodo[];
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}



const List:FC<IProps> = ({
  todoList,removeTodo,toggleTodo
}) => {
  return (
    <div>
      {
        todoList && todoList.map((todo)=>{
          return (
            <Item key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
          )
        })
      }
    </div>
  )
}

export default List