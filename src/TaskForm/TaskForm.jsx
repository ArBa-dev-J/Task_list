import x from "../assets/close.png";

function TaskForm() {
    return (
        <><section className="bg-white p-40 rounded-[20px]">
            <div className="flex  flex-row-reverse justify-between w-[90%] relative bottom-[160px]">
                <button type="button"><img src={x} alt="x" /></button>
                <h1>Add task</h1>
            </div>
            <form>
                <div className="flex flex-col">
                <label for="fname">Add task</label>
                <input type="text" className="border" />
                </div>
            </form>
        </section>
        </>
    );
}

export default TaskForm;