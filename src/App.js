import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      text: "Mary Lou",
      carrier: "American General Insurance",
      premium: "50",
      day: "2022-07-02",
      approved: true,
      id: 2,
    },
    {
      text: "Gerald R",
      carrier: "Gekko Insurance Co.",
      premium: "100",
      day: "2022-07-07",
      approved: true,
      id: 3,
    },
    {
      text: "Betty Sue",
      carrier: "Mutual Liberty Insurance",
      premium: "50.17",
      day: "2022-07-06",
      approved: false,
      id: 4,
    },
    {
      text: "Bob Smith",
      carrier: "Mutual of Lincoln",
      premium: "77.33",
      day: "2022-07-05",
      approved: true,
      id: 5,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Approved
  const toggleApproved = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, approved: !task.approved } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleApproved}
        />
      ) : (
        "No Recorded Sales"
      )}

      <Footer />
    </div>
  );
};

export default App;
