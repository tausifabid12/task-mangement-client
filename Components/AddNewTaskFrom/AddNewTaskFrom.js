import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";

const AddNewTaskFrom = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(new Date("12/29/2022"));
  const [endDate, serEndDate] = useState(new Date("12/29/2022"));
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const handleTaskAdd = (data) => {
    setLoading(true);
    const { priority, decs, taskName } = data;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API_KEY}`;
    const url = `https://api.imgbb.com/1/upload?key=bc8a2458a554fd7f0397c6b63fa4e6e4`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData?.data?.url;
        console.log(imgUrl);
        if (imgUrl) {
          const taskInfo = {
            taskName,
            decs,
            imgUrl,
            priority,
            startDate,
            endDate,
            email: user?.email,
          };
          fetch(`http://localhost:5000/addTask`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(taskInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status) {
                setLoading(false);
                toast.success("Task Added Successfully");
                router.push("/AllTasks");
              }
            });
        }
      });
  };
  return (
    <div className="w-3/5 mx-auto ">
      <form
        onSubmit={handleSubmit(handleTaskAdd)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-3"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="taskName" className="block dark:dark:text-gray-400">
            Task Name
          </label>
          <input
            type="taskName"
            {...register("taskName", {
              required: true,
            })}
            name="taskName"
            id="taskName"
            placeholder="taskName"
            className="w-full px-4 h-12 py-3 border border-gray-400 rounded-md  "
          />
          {errors.taskName && (
            <span className="text-red-500 pt-2">This is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="decs" className="block dark:dark:text-gray-400">
            Description
          </label>
          <input
            type="text"
            {...register("decs", {
              required: true,
            })}
            name="decs"
            id="decs"
            placeholder="description"
            className="w-full px-4 py-3 h-12 border border-gray-400 rounded-md  "
          />
          {errors.decs && (
            <span className="text-red-500 pt-2">This is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="priority" className="block dark:dark:text-gray-400">
            Priority
          </label>
          <select
            name="priority"
            id="priority"
            className="w-full px-4 py-3 h-12 border border-gray-400 rounded-md  "
            {...register("priority", {
              required: true,
            })}
          >
            <option defaultValue>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="image" className="block dark:dark:text-gray-400">
            Image
          </label>
          <input
            type="file"
            {...register("image", {
              required: true,
            })}
            name="image"
            id="image"
            placeholder="image"
            className="w-full px-4 py-3 h-12 border border-gray-400 rounded-md  "
          />
          {errors.image && (
            <span className="text-red-500 pt-2">This is required</span>
          )}
        </div>
        <div>
          <p>Starting Date:</p>
          <div className="w-full px-4 py-3 h-12 border border-gray-400 rounded-md flex items-center ">
            <div className=" mx-auto text-lg w-[38%]">
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Dead Line:</p>
          <div className="w-full px-4 py-3 h-12 border border-gray-400 rounded-md flex items-center ">
            <div className=" mx-auto text-lg w-[38%]">
              <ReactDatePicker
                selected={endDate}
                onChange={(date) => serEndDate(date)}
              />
            </div>
          </div>
        </div>

        {loading ? (
          <Button
            type="submit"
            color="blue-gray"
            variant="gradient"
            className="lg:col-span-2"
            fullWidth
          >
            Loading...
          </Button>
        ) : (
          <button
            type="submit"
            className="block w-full p-3 text-center lg:col-span-2 rounded-md bg-blue-500  text-white"
          >
            Add Task
          </button>
        )}
      </form>
    </div>
  );
};

export default AddNewTaskFrom;
