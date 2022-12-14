import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Title from "./components/Title";
import Info from "./components/Info";

const App = () => {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Title />
        <TaskForm />
        <TaskList />
        <Info />
      </div>
    </main>
  );
};

export default App;
