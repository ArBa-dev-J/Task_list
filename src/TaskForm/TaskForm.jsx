import x from "../assets/close.png";
import { useForm } from "react-hook-form";

function TaskForm({ exitClick }) {
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            isDone: "no",
        },
    });


    // DATA COLLECTION
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <><section className="bg-white p-40 w-2xl m-auto rounded-[20px]">
            <div className="flex  flex-row-reverse justify-around relative bottom-35">
                <button type="button" onClick={exitClick}><img src={x} alt="x" className="relative left-35" /></button>
                <h1 className="relative right-35 font-bold text-[2rem]">Add task</h1>
            </div>
            <form className="flex flex-col content-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-start relative right-22.5 bottom-22.5">
                    <label className="font-bold text-gray-600 relative bottom-1.25">Task</label>
                    <input
                        type="text"
                        id="task"
                        name="task"
                        className=" border rounded-[5px] pr-70 pt-2.5 pb-2.5"
                        {...register("title", { required: true })}
                    />
                    {errors.task}
                </div>
                <div className="relative right-22.5">
                    <label className="font-bold text-gray-600">Priority</label>
                    <div className="flex flex-row justify-between pt-2">
                        <div>
                            <button id="high" name="high" type="button" onClick={() => setValue("priority", "High")} className="border" >High</button>
                        </div>
                        <div>
                            <button id="medium" name="medium" type="button" onClick={() => setValue("priority", "Medium")} className="border" >Medium</button>
                        </div>
                        <div>
                            <button id="low" name="low" type="button" onClick={() => setValue("priority", "Low")} className="border">Low</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end relative bottom-[-120px]">
                    <input type="submit" value="Add" disabled={!errors} className="border" />
                </div>
            </form>
        </section>
        </>
    );
}

export default TaskForm;