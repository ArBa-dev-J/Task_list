import Task from "./Task";
import { useEffect, useState } from "react";

function TaskList() {
    const [task, setTask] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/tasks");
            if (!response.ok) {
                throw new Error("Error! Failed to fetch");
            }
            const results = await response.json();
            setTask(results);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>{error}</div>
            {task.map((task) => (
                <Task task={task} fetchData={fetchData} key={task.id} />
            ))}
        </>
    );
}

export default TaskList;
