import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, filter, toggleComplete, deleteTask, updateTask, setEditTask }) => {
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase()) ||
    task.priority.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredTasks.map(task => (
        <Accordion key={task.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accordion-title"
          >
            <Typography variant="h6">{task.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-content">
            <TaskItem
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              updateTask={updateTask}
              setEditTask={setEditTask}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TaskList;
