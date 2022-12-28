import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const useTaskInfo = (email) => {
  const { user } = useContext(AuthContext);

  const { data: taskInfo = [], refetch } = useQuery({
    queryKey: ["taskInfo", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/allTasks?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  return [taskInfo, refetch];
};

export default useTaskInfo;
