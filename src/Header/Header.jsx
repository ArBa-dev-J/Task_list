import { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";

function Header() {
    const [showForm, setShowForm] = useState(false);
    const onClick = () => setShowForm(true);
    const exitClick = () => setShowForm(false);


    useEffect(() => {
        exitClick;
    }, []);

    return (<>
        <header className="flex justify-around items-center mt-3 p-10">
            <div><h1 className="font-bold text-[3rem]">Task List</h1></div>
            <div>
                <button type="button" onClick={onClick} className=" p-3 pr-5 pl-5 bg-purple-900 text-white rounded-[10px]">+ Add Task</button>
            </div>
        </header>
        {showForm ? <TaskForm exitClick={exitClick}/> : null}
    </>
    );
}

export default Header;