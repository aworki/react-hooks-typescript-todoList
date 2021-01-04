import { FC, useRef, ReactElement } from 'react'
import { ITodo } from '../typings'
//3、传过来的参数要进行注解，新建interface进行props注解
interface Iprops {
  addTodo: (todo: ITodo) => void,
  todoList:ITodo[]
}

//typescript添加的东西 
//1、Input添加FC注释
//2、useRef添加HTMLInputElement泛型

//4、添加了返回值注解

//FC是Input的注解,然后就直接在FC后加上传过来参数的格式
const Input:FC<Iprops> = ({
  addTodo,todoList
  //这个是返回值的注解
}): ReactElement => {
  const InputRef = useRef<HTMLInputElement>(null)

  //返回值注解
  const addItem = (): void => {
    const val: string = InputRef.current!.value.trim();
    if (val.length > 0) {
      //做一个推断，是否和list里的项重复
      const isExist = todoList.find(todo=>todo.content === val)

      isExist && alert("已存在该项")
       
    }
    if(val.length == 0){
      alert("不许为空！")
      return
    }
    //传过来的函数进行使用
    addTodo({
      id:new Date().getTime(),
      content:val,
      completed:false
    })

    InputRef.current!.value = "";

    return
  }

  return (
    <div>
      <input type="text" placeholder="请输入代办项" ref={InputRef} />
      <button onClick={addItem}>增加</button>
    </div>
  )
}

/*
  {

  }
*/

export default  Input