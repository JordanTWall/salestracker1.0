import { FaTimes } from "react-icons/fa";
import { format } from 'date-fns';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.approved ? 'approved' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.carrier}</p>
      <p> ${task.premium * 12} AP</p>
      <p>{format(new Date(task.day), 'MM/dd/yyyy')}</p>
    </div>
  );
};

export default Task;
