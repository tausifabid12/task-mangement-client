import Loading from "../Components/Loading/Loading";
import Nav from "../Components/Navbar/Navbar";
import TaskCard from "../Components/TaskCard/TaskCard";
import useTaskInfo from "../hooks/useTaskInfo";

const completedTasks = () => {
  const [taskInfo, refetch, isLoading] = useTaskInfo();
  console.log(taskInfo?.data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Nav />
      <div className="max-w-screen-2xl mx-auto my-12">
        <h2 className="text-gray-900 text-3xl font-bold pb-3">
          Completed Tasks
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16  lg:gap-x-5 lg:gap-y-16 py-16 ">
          {taskInfo?.data &&
            taskInfo?.data
              .filter((t) => t?.status === "completed")
              .map((info) => (
                <TaskCard key={info?._id} info={info} refetch={refetch} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default completedTasks;
