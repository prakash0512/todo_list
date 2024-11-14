import dayjs from "dayjs";
import '../assets/style.css';

const getTaskStyle = (task) => {
	if (task.completed) return "task-completed";
	const dueDate = task.dueDate ? dayjs(task.dueDate) : null;
	const now = dayjs().startOf("day");

	if (dueDate && dueDate.isBefore(now)) return "task-overdue";
	if (task.priority === "High") return "task-upcoming-high";
	if (task.priority === "Medium") return "task-upcoming-medium";
	return "task-upcoming-low";
};

export default getTaskStyle;
