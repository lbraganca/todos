import { ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DataContextProvider from "./contexts/DataContext";
import theme from "./themes/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataContextProvider>
        <Layout>
          <TodoForm />
          <TodoList />
        </Layout>
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;
