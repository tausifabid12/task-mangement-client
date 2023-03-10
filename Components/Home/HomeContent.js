import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { CiAlarmOff, CiAlarmOn, CiMemoPad } from "react-icons/ci";
import ChartCard from "../ChartCard/ChartCard";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTaskInfo from "../../hooks/useTaskInfo";

const HomeContent = () => {
  const { user } = useContext(AuthContext);
  const [taskInfo, refetch] = useTaskInfo();
  // const totalTasksCount = taskInfo?.data.length;
  // const startedTasks = taskInfo?.data.filter(
  //   (t) => t.status === "started"
  // ).length;

  if (taskInfo?.data) {
    console.log(taskInfo?.data);
    const startedTasks = taskInfo?.data.filter(
      (t) => t.status === "started"
    ).length;
    console.log(startedTasks);
  }
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-2 lg:px-10 ">
        <Card className="w-96 relative shadow-md border-2 border-gray-50 mx-auto">
          <div className="absolute -top-7 left-5 min-w-16 bg-blue-500 shadow-lg shadow-blue-200 p-4 rounded-2xl">
            <span className="font-bold text-3xl text-white">
              <CiMemoPad />
            </span>
          </div>
          <CardBody className="text-right">
            <p className="text-3xl font-bold text-gray-900">Total Task</p>
            <p className="text-xl font-semibold text-blue-500">
              {taskInfo?.data ? taskInfo?.data.length : "00"}
            </p>
          </CardBody>
          <CardFooter divider className="text-right flex justify-end  py-3">
            <p className="">
              {" "}
              <span className="text-green-800 font-bold">+50%</span> than last
              week
            </p>
          </CardFooter>
        </Card>
        <Card className="w-96 relative shadow-md border-2 border-gray-50 mx-auto">
          <div className="absolute -top-7 left-5 min-w-16 bg-pink-500 shadow-lg shadow-pink-200 p-4 rounded-2xl">
            <span className=" font-extrabold text-3xl text-white">
              <CiAlarmOn />
            </span>
          </div>
          <CardBody className="text-right">
            <p className="text-3xl font-bold text-gray-900">Started</p>
            <p className="text-xl font-semibold text-pink-500">
              {taskInfo?.data
                ? taskInfo?.data.filter((t) => t.status === "started").length
                : "00"}
            </p>
          </CardBody>
          <CardFooter divider className="text-right flex justify-end  py-3">
            <p className="">
              {" "}
              <span className="text-green-800 font-bold">+50%</span> than last
              week
            </p>
          </CardFooter>
        </Card>
        <Card className="w-96 relative shadow-md border-2 border-gray-50 mx-auto">
          <div className="absolute -top-7 left-5 min-w-16 bg-orange-500 shadow-lg shadow-orange-200 p-4 rounded-2xl">
            <span className="font-bold text-3xl text-white">
              <CiAlarmOff />
            </span>
          </div>
          <CardBody className="text-right">
            <p className="text-3xl font-bold text-gray-900">Completed</p>
            <p className="text-xl font-semibold text-orange-500">
              {taskInfo?.data
                ? taskInfo?.data.filter((t) => t.status === "completed").length
                : "00"}
            </p>
          </CardBody>
          <CardFooter divider className="text-right flex justify-end  py-3">
            <p className="">
              {" "}
              <span className="text-green-800 font-bold">+50%</span> than last
              week
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:px-10 mt-20">
        <ChartCard color={"blue"} data={"New Task Added This Week"} />
        <ChartCard color={"pink"} data={"Task Completed This Week"} />
        <ChartCard color={"orange"} data={"Task Abandoned This Week"} />
      </div>
    </div>
  );
};

export default HomeContent;
