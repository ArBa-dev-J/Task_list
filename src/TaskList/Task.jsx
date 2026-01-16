import deleteIcon from "../assets/delete.png"
import editIcon from "../assets/notes.png";

function Task({ task, fetchData }) {

    //DELETE TASK

    const deleteData = async (id) => {
        try {
            const requestOptions = {
                method: "DELETE",
            };
            const response = await fetch(
                "http://localhost:3000/tasks/" + id,
                requestOptions
            );
            if (response.ok) {
                fetchData();
            } else {
                throw new Error("Deletion attempt was unsuccessful");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    // COLOR BASED ON PRIO 
    const getPriorityColor = () => {
        if (task.priority === "Low") return "green";
        if (task.priority === "Medium") return "orange";
        if (task.priority === "High") return "red";
        return "gray";
    };

    return (
        <>
            <div className="flex justify-between items-center m-2 w-[45%]  border border-gray-500 rounded-[20px] p-5">
                <div>
                    <p className="text-gray-700">Task</p>
                    <p className="font-bold text-gray-700 w-37.5">{task.title}</p>
                </div>
                <div>
                    <p className="text-gray-700">Priority</p>
                    <p style={{ color: getPriorityColor() }} className="font-bold">{task.priority}</p>
                </div>
                <button type="button" className=" block font-bold text-gray-700 bg-gray-200 rounded-[5px] pl-2 pr-2">To do</button>
                <div className="border p-5 rounded-[20px]" />
                <div>
                    <button className="pr-4"><img src={editIcon} /></button>
                    <button onClick={() => deleteData(task.id)}><img src={deleteIcon} /></button>
                </div>
            </div>
        </>
    );
}

export default Task