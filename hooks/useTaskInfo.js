import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const useTaskInfo = (email) => {
  const { user } = useContext(AuthContext);

  const {
    data: taskInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["taskInfo", user?.email],
    queryFn: () =>
      fetch(
        `https://task-management-server-sooty.vercel.app/allTasks?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  return [taskInfo, refetch, isLoading];
};

export default useTaskInfo;
