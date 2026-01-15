import deleteIcon from "../assets/delete.png"
import editIcon from "../assets/notes.png";


function Task({ skill, fetchData }) {

      const getPriorityColor = () => {
        if (skill.priority === "Low") return "green";
        if (skill.priority === "Medium") return "orange";
        if (skill.priority === "High") return "red";
        return "gray";
    };
    
    return (
        <>
            <div className="flex justify-between items-center w-[45%]  border border-gray-500 rounded-[20px] p-5">
                <div>
                    <p className="text-gray-700">Task</p>
                    <p className="font-bold text-gray-700 w-[150px]">{skill.title}</p>
                </div>
                <div>
                    <p className="text-gray-700">Priority</p>
                    <p style={{ color: getPriorityColor()}} className="font-bold">{skill.priority}</p>
                </div>
                <div>
                    <button type="button" className="font-bold text-gray-700 bg-gray-200 rounded-[5px] pl-2 pr-2">To do</button>
                </div>
                <div>
                    <div className="border p-5 rounded-[20px]" />
                </div>
                <div>
                    <button className="pr-4"><img src={editIcon} className="" /></button>
                    <button><img src={deleteIcon} /></button>
                </div>
            </div>
        </>
    );
}

export default Task