import * as tc from '../actions/todos'; //tc todo reducer
import {RECEIVE_DATA} from '../actions/shared';

export default function todos (state = [], action) {
    switch(action.type) {
      case tc.ADD_TODO :
        return state.concat([action.todo])
      case tc.REMOVE_TODO :
        return state.filter((todo) => todo.id !== action.id)
      case tc.TOGGLE_TODO :
        return state.map((todo) => todo.id !== action.id ? todo :
          Object.assign({}, todo, { complete: !todo.complete }))
      case RECEIVE_DATA :
        return action.todos
      default :
        return state
    }
  }