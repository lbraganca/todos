import { Container, IconButton, TextField } from "@material-ui/core";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./useStyles";

export default function TodoForm({ todo }) {
  const { dispatch, data } = useContext(DataContext);
  const styles = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo" });
  };

  return (
    <Container>
      <form
        className={styles.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          value={data.input}
          onChange={(e) =>
            dispatch({ type: "updateInput", payload: e.target.value })
          }
          fullWidth
          label="Content"
          className={styles.field}
          required
        ></TextField>
        <IconButton
          disabled={!data.input}
          variant="contained"
          type="submit"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </form>
    </Container>
  );
}
