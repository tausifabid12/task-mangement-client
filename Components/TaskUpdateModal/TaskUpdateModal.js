import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";

const TaskUpdateModal = ({ openModal, handleOpenModal, info, refetch }) => {
  const {
    endDate: oldEndDate,
    startDate: oldStartDate,
    taskName,
    decs,
    priority,
    _id,
    status,
  } = info;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, serEndDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateTaskInfo = (data) => {
    const { priority, decs, taskName, status } = data;

    const taskInfo = {
      taskName,
      decs,
      priority,
      startDate,
      endDate,
      status,
    };
    console.log(taskInfo);

    fetch(`https://task-management-server-sooty.vercel.app/updateTask/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          refetch();
          toast.success("Data Updated successfully");
        }
        console.log(data);
      });
  };
  return (
    <Fragment>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={openModal} size="lg" handler={handleOpenModal}>
        <DialogHeader>{taskName}</DialogHeader>
        <form onSubmit={handleSubmit(handleUpdateTaskInfo)}>
          <DialogBody divider>
            <div className="w-full px-4 mx-auto ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="taskName"
                    className="block dark:dark:text-gray-400"
                  >
                    Task Name
                  </label>
                  <input
                    type="taskName"
                    {...register("taskName", {
                      required: true,
                    })}
                    name="taskName"
                    id="taskName"
                    defaultValue={taskName}
                    className="w-full px-4 h-12 py-3 border border-gray-700 rounded-md  "
                  />
                  {errors.taskName && (
                    <span className="text-red-500 pt-2">This is required</span>
                  )}

                  <div className="flex justify-end text-xs dark:dark:text-gray-400"></div>
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="decs"
                    className="block dark:dark:text-gray-400"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    {...register("decs", {
                      required: true,
                    })}
                    name="decs"
                    id="decs"
                    defaultValue={decs}
                    className="w-full px-4 py-3 h-12 border border-gray-700 rounded-md  "
                  />
                  {errors.taskName && (
                    <span className="text-red-500 pt-2">This is required</span>
                  )}
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="cars"
                    className="block dark:dark:text-gray-400"
                  >
                    Priority
                  </label>
                  <select
                    name="cars"
                    id="cars"
                    defaultValue={priority}
                    className="w-full px-4 py-3 h-12 border border-gray-700 rounded-md  "
                    {...register("priority", {
                      required: true,
                    })}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="status"
                    className="block dark:dark:text-gray-400"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    defaultValue={status}
                    className="w-full px-4 py-3 h-12 border border-gray-700 rounded-md  "
                    {...register("status", {
                      required: true,
                    })}
                  >
                    <option>New</option>
                    <option>started</option>
                    <option>completed</option>
                  </select>
                </div>

                {/* <div>
                  <p>Starting Date:</p>
                  <div className="w-full px-4 py-3 h-12 border border-gray-700 rounded-md flex items-center ">
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
                  <div className="w-full px-4 py-3 h-12 border border-gray-700 rounded-md flex items-center ">
                    <div className=" mx-auto text-lg w-[38%]">
                      <ReactDatePicker
                        selected={endDate}
                        onChange={(date) => serEndDate(date)}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpenModal}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="blue"
              onClick={handleOpenModal}
            >
              <span>Update</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </Fragment>
  );
};

export default TaskUpdateModal;
