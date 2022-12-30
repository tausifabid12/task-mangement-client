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
          <div className="grid grid-cols-1 lg:grid-cols-3 py-16 gap-y-8">
            {taskInfo?.data &&
              taskInfo?.data.map((info) => (
                <TabPanel key={info?._id} value={"All Tasks"}>
                  <TaskCard key={info?._id} info={info} refetch={refetch} />
                </TabPanel>
              ))}

            {taskInfo?.data &&
              taskInfo?.data.map((info) => (
                <TabPanel key={info?._id} value={info?.status}>
                  <TaskCard key={info?._id} info={info} refetch={refetch} />
                </TabPanel>
              ))}
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AllTaskTab;
