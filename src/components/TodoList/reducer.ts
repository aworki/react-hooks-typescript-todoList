import { IState, IAction, ACTION_TYPE, ITodo } from './typings';
//action里有两个参数 一个是type动作 还有一个是payload参数，也就是单个todo或者是id
function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        //这里把payload做断言成ITodo
        todoList: [...state.todoList, payload as ITodo]
      }

    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        //这里把payload做断言成ITodo
        todoList: state.todoList.filter(todo => todo.id !== payload)
      }

    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        //这里把payload做断言成ITodo
        todoList: state.todoList.map(todo => {
          return todo.id === payload?
          {
            ...todo,
            //这里的completed会覆盖原有的completed
            completed:!todo.completed
          }
          :
          {
            ...todo
          }
        })
      }

      case ACTION_TYPE.INIT_TODOLIST:
      return {
        ...state,
        todoList:payload as ITodo[]
      }
    default:
      return state
  }
}

export default reducer