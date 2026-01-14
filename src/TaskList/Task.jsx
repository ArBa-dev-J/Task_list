import deleteIcon from  "../assets/delete.png"
import editIcon from "../assets/notes.png";

function Task(){
return (
    <>
    <div className="flex justify-between items-center w-[45%] border p-5">
        <div>
            <p>Task</p>
            <p>Go to gym</p>
        </div>
        <div>
            <p>Priority</p>
            <p>High</p>
        </div>
        <div>
            <button type="button">To do</button>
        </div>
        <div>
            <div className="border p-5 rounded-[20px]"/>
        </div>
        <div>
            <button className=""><img src={editIcon}/></button>
            <button className=""><img src={deleteIcon}/></button>
        </div>
    </div>
    </>
);
}

export default Task