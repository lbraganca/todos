import { IconButton, Paper, TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import useStyles from "./useStyles";
import { DataContext } from "../../contexts/DataContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

export default function TodoDetails({ todo }) {
  const { dispatch } = useContext(DataContext);
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      {todo.edit ? (
        <>
          <TextField
            fullWidth
            defaultValue={todo.edit}
            onChange={(e) =>
              dispatch({
                type: "updateTodo",
                payload: { ...todo, edit: e.target.value },
              })
            }
            className={styles.text}
          />
          <IconButton
            color="primary"
            onClick={() =>
              dispatch({
                type: "updateTodo",
                payload: { ...todo, content: todo.edit, edit: null },
              })
            }
          >
            <SaveIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              dispatch({
                type: "updateTodo",
                payload: { ...todo, edit: null },
              })
            }
            color="primary"
          >
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography className={styles.text}>{todo.content}</Typography>
          <IconButton
            color="primary"
            onClick={() => {
              dispatch({
                type: "updateTodo",
                payload: { ...todo, edit: todo.content },
              });
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => dispatch({ type: "deleteTodo", payload: todo.id })}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Paper>
  );
}
