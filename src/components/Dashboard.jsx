import TaskForm from './TaskForm';
import TaskList from './TaskList';
import SearchFilter from './SearchFilter';
import { Grid, Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import '../assets/style.css';

import useLocalStorage from '../hooks/useLocalStorage';

const Dashboard = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [editTask, setEditTask] = useState(false);

  const addOrUpdateTask = (newTask) => {
    console.log(editTask);
    console.log(newTask);
    if (editTask) {
      const updatedTasks = tasks.map(task => (task.id === newTask.id ? newTask : task));
      setTasks(updatedTasks);
      setEditTask(null);
    } else {
      const newTaskWithId = { ...newTask, id: Date.now(), completed: false };
      setTasks([...tasks, newTaskWithId]);
    }
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Filter tasks based on tab index
  const filteredTasks = tasks.filter(task => {
    const dueDate = task.dueDate ? dayjs(task.dueDate) : null;
    const now = dayjs().startOf('day');

    if (tabIndex === 0) return dueDate && (dueDate.isSame(now, 'day') || dueDate.isAfter(now)) && !task.completed;
    if (tabIndex === 1) return dueDate && dueDate.isBefore(now) && !task.completed;
    if (tabIndex === 2) return task.completed;
    return true;
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            {editTask ? "Edit Task" : "Add Task"}
          </Typography>
          <TaskForm addOrUpdateTask={addOrUpdateTask} editTask={editTask} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <SearchFilter setFilter={setFilter} />
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="Upcoming" />
            <Tab label="Overdue" />
            <Tab label="Completed" />
          </Tabs>
          <Box mt={2}>
            <TaskList
              tasks={filteredTasks}
              filter={filter}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              updateTask={addOrUpdateTask}
              setEditTask={setEditTask}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
