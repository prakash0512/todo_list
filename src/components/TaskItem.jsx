import { Box, Button, Typography, TextField, Select, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import getTaskStyle from './TaskStyle';
import '../assets/style.css';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TaskItem = ({ task, toggleComplete, deleteTask, updateTask, setEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleSave = () => {
    setEditTask(true);
    setIsEditing(false);
    updateTask({ ...editedTask, completed: task.completed });
  };

  const handleMarkComplete = () => {
    toggleComplete(task.id);
    if (!isEditing) setIsEditing(false);
  };

  return (
    <Box mb={2}>
      <Box className={getTaskStyle(task)} sx={{ padding: 2, borderRadius: 2 }}>
        {isEditing ? (
          <>
            <TextField
              label="Title"
              fullWidth
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            />
            <Select
              fullWidth
              value={editedTask.priority}
              onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Due date"
                value={dayjs(editedTask.dueDate)}
                onChange={(newDate) => setEditedTask({ ...editedTask, dueDate: newDate })}
                minDate={dayjs()}
              />
            </LocalizationProvider>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
            <Button onClick={() => setIsEditing(false)} variant="outlined">
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">{task.title}</Typography>
            <Typography color="textSecondary">{task.description}</Typography>
            <Typography color="textSecondary">Priority: {task.priority}</Typography>
            <Typography color="textSecondary">
              Due: {task.dueDate ? dayjs(task.dueDate).format('DD/MM/YYYY') : 'No Due Date'}
            </Typography>
            <Button onClick={handleMarkComplete} color={task.completed ? "secondary" : "primary"}>
              {task.completed ? 'Completed' : 'Mark as Complete'}
            </Button>
            <Button onClick={() => setIsEditing(true)} color="primary">Edit</Button>
            <Button onClick={() => deleteTask(task.id)} color="error">Delete</Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default TaskItem;
