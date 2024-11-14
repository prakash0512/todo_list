import { TextField, Button, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import '../assets/style.css';

const TaskForm = ({ addOrUpdateTask, editTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: null,
  });

  useEffect(() => {
    if (editTask) setTask(editTask);
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTask({ ...task });
    setTask({ title: "", description: "", priority: "Low", dueDate: null });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
      <TextField
        label="Title"
        fullWidth
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        margin="normal"
      />
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={4}
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        margin="normal"
      />
      <Select
        fullWidth
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
        margin="normal"
      >
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Due date"
          value={task.dueDate}
          onChange={(newDate) => setTask({ ...task, dueDate: newDate })}
          minDate={dayjs()}
          margin="normal"
        />
      </LocalizationProvider>
      <Button type="submit" variant="contained" color="primary">
        {editTask ? "Update Task" : "Add Task"}
      </Button>
    </form>
  );
};

export default TaskForm;
