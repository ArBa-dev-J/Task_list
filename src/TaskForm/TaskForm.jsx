import { useState } from "react";
import x from "../assets/close.png";
import { useForm } from "react-hook-form";

function TaskForm({ exitClick }) {
  const { setValue, register, handleSubmit } = useForm({
    defaultValues: { isDone: "no" },
  });

  //USESTATE FOR PRIORITY BUTTONS WHEN CLICKED
  const [red, setRed] = useState("");
  const [orange, setOrange] = useState("");
  const [green, setGreen] = useState("");

  const clickRed = () => {
    setRed("red");
  };

  const clickOrange = () => {
    setOrange("orange");
  };

  const clickGreen = () => {
    setGreen("green");
  };

  // SEND DATA TO JSON
  const onSubmit = async (data) => {
    try {
      const requestOptions = {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        "http://localhost:3000/tasks",
        requestOptions
      );
      if (response.ok) {
        alert("data was sent");
      } else {
        throw new Error("error");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className="bg-white p-40 w-2xl m-auto rounded-[20px]">
        <div className="flex  flex-row-reverse justify-around relative bottom-35">
          <button type="button" onClick={exitClick}>
            <img src={x} alt="x" className="relative left-35" />
          </button>
          <h1 className="relative right-35 font-bold text-[2rem]">Add task</h1>
        </div>
        <form
          className="flex flex-col content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-start relative right-22.5 bottom-22.5">
            <label className="font-bold text-gray-600 relative bottom-1.25">
              Task
            </label>
            <input
              type="text"
              id="task"
              name="task"
              className=" border rounded-[5px] pr-70 pt-2.5 pb-2.5"
              {...register("title", { required: true })}
            />
          </div>
          <div className="relative right-22.5">
            <label className="font-bold text-gray-600">Priority</label>
            <div className="flex flex-row justify-between pt-2">
              <div>
                <button
                  type="button"
                  onClick={() => setValue("priority", "High", clickRed())}
                  className="border  border-red-600 pl-5 pr-5 pb-2 pt-2"
                  style={{backgroundColor: red}}
                >
                  High
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setValue("priority", "Medium", clickOrange())
                  }
                  className="border border-orange-600 pl-5 pr-5 pb-2 pt-2"
                  style={{backgroundColor: orange}}
                >
                  Medium
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setValue("priority", "Low", clickGreen())
                  }
                  className="border border-green-500 pl-5 pr-5 pb-2 pt-2"
                  style={{backgroundColor: green}}
                >
                  Low
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end relative bottom-[-120px]">
            <input type="submit" value="Add" className="border" />
          </div>
        </form>
      </section>
    </>
  );
}

export default TaskForm;
