import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import AllTaskTab from "../Components/AllTasksTab/AllTaskTab";
import Loading from "../Components/Loading/Loading";
import Nav from "../Components/Navbar/Navbar";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const AllTasks = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user?.email) {
    router.push("/login");
  }
  return (
    <div>
      <Nav></Nav>
      <AllTaskTab />
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default AllTasks;
