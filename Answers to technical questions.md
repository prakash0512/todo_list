# Technical Questions Documentation


**Question**:  
How long did you spend on the coding test?

**Answer**:  
I spent approximately **15 hours** on the coding test. This time included reading through the requirements, planning the overall structure, writing the code, and debugging to ensure the solution met the specifications and handled edge cases effectively.




**Question**:  
What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

**Answer**:  
One of the most useful features added to the latest versions of JavaScript (specifically ES2020 and beyond) is the **optional chaining** operator (`?.`). This operator allows you to safely access deeply nested object properties without needing to check each level for `null` or `undefined` values, which helps prevent runtime errors and keeps the code cleaner.

Here’s an example of how I’ve used optional chaining in a React component to handle potentially undefined nested properties:

```javascript
import React from "react";

const UserProfile = ({ user }) => {
	return (
		<div>
			<h1>{user?.name ?? "Guest"}</h1>
			<p>Email: {user?.contact?.email ?? "No email available"}</p>
			<p>Address: {user?.address?.city ?? "No city provided"}</p>
		</div>
	);
};

export default UserProfile;






**Question**:  
How would you track down a performance issue in production? Have you ever had to do this?

**Answer**:  
To address a performance issue in production, I would follow these steps:

1. **Identify Symptoms and Metrics**:  
   Start by monitoring critical metrics such as CPU usage, memory consumption, response times, and error rates. This helps pinpoint areas of abnormal behavior and guides the investigation.

2. **Use Profiling Tools**:  
   Leverage profiling tools that are specific to the stack (e.g., `perf` for Linux, `gprof` for C++ code, or application monitoring platforms like New Relic, Dynatrace, or Prometheus). These tools reveal bottlenecks and performance hotspots in the application.

3. **Examine Logs**:  
   Analyze server and application logs for error messages, warnings, or unusual patterns, especially those indicating extended processing times. Logs can reveal problematic code paths or resource-intensive functions.

4. **Isolate the Issue**:  
   Narrow down the root cause using A/B testing or staged rollouts. Focusing on recent changes, if the issue is new, can help identify the specific trigger.

5. **Optimize**:  
   After identifying the issue, optimize by minimizing unnecessary computations, refining database queries, or refactoring code to enhance efficiency.

In a previous project, I encountered a performance issue where response times started increasing due to unoptimized database queries. By indexing key fields and simplifying query logic, I was able to restore acceptable performance levels.

---



**Question**:  
If you had more time, what additional features or improvements would you consider adding to the task management application?

**Answer**:  
With additional time, I would focus on the following features to improve the task management application:

1. **Advanced Filtering and Sorting**:  
   Enable users to filter and sort tasks by priority, due date, and status, enhancing usability and efficiency in managing tasks.

2. **Notifications and Reminders**:  
   Add email or in-app notifications for approaching deadlines or overdue tasks to keep users informed and engaged.

3. **Task Dependencies**:  
   Allow users to create dependencies between tasks, marking some as "blocked" until prerequisite tasks are completed. This helps users plan and manage complex projects effectively.

4. **Progress Tracking and Analytics**:  
   Include dashboards that display task completion trends, average completion times, and other productivity insights.

5. **Mobile Application**:  
   Develop a responsive or dedicated mobile app, allowing users to access and manage tasks on the go.

6. **Calendar Integration**:  
   Integrate with popular calendar apps like Google Calendar and Outlook, enabling seamless task management across platforms.

These features would significantly enhance user experience and functionality, making the application more versatile and user-friendly.
