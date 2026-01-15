import TaskList from "./TaskList";

function TaskSection() {
    return (
        <>
            <section className="flex flex-col items-center mt-20">
                <TaskList />
            </section>
        </>
    );
}

export default TaskSection;