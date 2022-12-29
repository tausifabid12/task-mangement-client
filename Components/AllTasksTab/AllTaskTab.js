import React, { useContext } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TaskCard from "../TaskCard/TaskCard";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTaskInfo from "../../hooks/useTaskInfo";
import Nodata from "../Nodata/Nodata";

const AllTaskTab = () => {
  const { user } = useContext(AuthContext);
  const [taskInfo, refetch] = useTaskInfo();

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
        }
        console.log(data);
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
  return (
    <div className="max-w-screen-2xl mx-auto py-11">
      <Tabs id="custom-animation" value="All Tasks">
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full">
          <p className="text-3xl font-bold">Tasks</p>
          <div>
            <TabsHeader>
              {["All Tasks", "started", "completed"].map((name, i) => (
                <Tab key={i} value={name}>
                  {name}
                </Tab>
              ))}
            </TabsHeader>
          </div>
        </div>

        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 py-12 ">
            {taskInfo?.data &&
              taskInfo?.data.map((info) => (
                <TabPanel key={info?._id} value={"All Tasks"}>
                  <TaskCard
                    key={info?._id}
                    info={info}
                    refetch={refetch}
                    handleTaskStatus={handleTaskStatus}
                    handleDelete={handleDelete}
                  />
                </TabPanel>
              ))}

            {taskInfo?.data &&
              taskInfo?.data.map((info) => (
                <TabPanel key={info?._id} value={info?.status}>
                  {info?.status ? (
                    <TaskCard
                      key={info?._id}
                      info={info}
                      handleTaskStatus={handleTaskStatus}
                    />
                  ) : (
                    <Nodata />
                  )}
                </TabPanel>
              ))}
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AllTaskTab;
