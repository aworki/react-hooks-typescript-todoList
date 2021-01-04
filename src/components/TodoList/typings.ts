
//作为单个list的注解
export interface ITodo {
  id: number,
  content: string,
  completed: boolean
}

export interface IState {
  todoList: ITodo[]
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  INIT_TODOLIST = 'initTodolist'
}

export interface IAction{
  type:ACTION_TYPE,
  //ITodo是添加 ，number是toggle或者删除
  payload:ITodo | number | ITodo[]
}