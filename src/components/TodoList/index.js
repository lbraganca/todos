import { Typography, Container } from "@material-ui/core";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import TodoDetails from "../TodoDetails";
import useStyles from "./useStyles";

export default function TodoList() {
  const {
    data: { todos },
  } = useContext(DataContext);
  const styles = useStyles();

  return (
    <Container>
      {todos.length ? (
        <div className={styles.todoList}>
          {todos.map((todo) => (
            <TodoDetails key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <Typography className={styles.empty}>
          Feels lonely here, start adding TODOs
        </Typography>
      )}
    </Container>
  );
}
