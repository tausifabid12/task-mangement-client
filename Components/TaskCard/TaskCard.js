import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  Progress,
  Button,
} from "@material-tailwind/react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import TaskUpdateModal from "../TaskUpdateModal/TaskUpdateModal";
import { useRouter } from "next/router";

const TaskCard = ({ info, refetch }) => {
  const { endDate, startDate, taskName, imgUrl, decs, _id, status } = info;
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  //-------- handling task status started or completed
  const handleTaskStatus = (id, status) => {
    fetch(`https://task-management-server-sooty.vercel.app/updateTask/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          refetch();
          toast.success(`Task ${status}`);
          if (status === "completed") {
            router.push("/completedTasks");
          }
          if (status === "new") {
            router.push("/AllTasks");
          }
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://task-management-server-sooty.vercel.app/deleteTask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          refetch();
          toast.error(`Task Deleted`);
        }
        console.log(data);
      });
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Card className="w-full mx-2 h-[290px] shadow-md border-t-2 border-gray-200 lg:mx-auto">
        <CardHeader className="absolute h-28 w-36 left-6 -top-5 shadow-lg shadow-blue-100">
          <img src={imgUrl} alt="Task Image" className="h-full w-full " />
        </CardHeader>
        <CardBody className=" pt-20">
          <div className="flex justify-between pb-3">
            <p className="text-lg lg:text-2xl font-bold text-gray-900">
              {taskName}
            </p>
            <div className="flex w-max gap-2">
              {/* <button onClick={handleOpenModal}> */}
              {status === "completed" || (
                <IconButton
                  onClick={handleOpenModal}
                  ripple={true}
                  color="green"
                  size="sm"
                >
                  <span>
                    <BsFillPencilFill />
                  </span>
                </IconButton>
              )}

              <IconButton
                onClick={() => handleDelete(_id)}
                ripple={true}
                color="red"
                size="sm"
              >
                <BsFillTrashFill />
              </IconButton>
            </div>
          </div>
          <Typography>{decs}</Typography>
          <div
            className={` mt-3 justify-between ${
              status === "completed" ? "flex" : "hidden"
            }`}
          >
            <p>Want A Fresh Start: </p>
            <Button
              onClick={() => handleTaskStatus(_id, "new")}
              color="orange"
              size="sm"
              className=""
            >
              not Complete
            </Button>
          </div>
        </CardBody>
        <div className="w-full max-h-28 align-bottom">
          <CardFooter divider className="h- py-3">
            <div className="absolute top-1 right-2 ">
              {status === "completed" ? (
                <Button
                  onClick={() =>
                    toast.error("You have already Completed the task")
                  }
                  color="red"
                  size="sm"
                  className="shadow-lg shadow-red-200"
                >
                  Completed
                </Button>
              ) : (
                <>
                  {status === "started" ? (
                    <Button
                      onClick={() => handleTaskStatus(_id, "completed")}
                      color="green"
                      size="sm"
                      className="shadow-lg shadow-green-200"
                    >
                      Complete
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleTaskStatus(_id, "started")}
                      color="blue"
                      size="sm"
                      className="shadow-lg shadow-blue-200"
                    >
                      Start
                    </Button>
                  )}
                </>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold pr-4">Progress:</p>
              <Progress value={10} color="blue" />
            </div>
          </CardFooter>
        </div>
      </Card>
      <TaskUpdateModal
        info={info}
        refetch={refetch}
        handleOpenModal={handleOpenModal}
        openModal={openModal}
      />
    </div>
  );
};

export default TaskCard;
