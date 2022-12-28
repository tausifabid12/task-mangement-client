import { useRouter } from "next/router";
import { useContext } from "react";
import AddNewTaskFrom from "../Components/AddNewTaskFrom/AddNewTaskFrom";
import Loading from "../Components/Loading/Loading";
import Nav from "../Components/Navbar/Navbar";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const addTask = () => {
  const { user, loading } = useContext(AuthContext);

  const router = useRouter();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user?.email) {
    router.push("/login");
  }
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <Nav></Nav>
      <div className="py-16">
        <div>
          <h2 className="text-3xl font-bold text-center pb-10">Add New Task</h2>
        </div>
        <div>
          <AddNewTaskFrom />
        </div>
      </div>
    </div>
  );
};

export default addTask;
