import Task from "./Task";
import { useEffect, useState } from "react";

function TaskList() {
    const [skill, setSKill] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/tasks");
            if (!response.ok) {
                throw new Error("Error! Failed to fetch");
            }
            const results = await response.json();
            setSKill(results);
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
            {skill.map((skill) => (
                <Task skill={skill} fetchData={fetchData()} key={skill.id} />
            ))}

        </>
    );
}

export default TaskList;
