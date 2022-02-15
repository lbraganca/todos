import { v1 } from "uuid";

export default function dataReducer(state, { type, payload }) {
  switch (type) {
    case "addTodo":
      return {
        ...state,
        input: "",
        todos: [...state.todos, { content: state.input, id: v1() }],
      };
    case "deleteTodo":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    case "updateTodo":
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === payload.id ? { ...todo, ...payload } : todo
          ),
        ],
      };
    case "updateInput":
      return {
        ...state,
        input: payload,
      };
    default:
      throw new Error(`Action '${type}' not recognized.`);
  }
}
