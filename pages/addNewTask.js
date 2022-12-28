import AddNewTaskFrom from "../Components/AddNewTaskFrom/AddNewTaskFrom";
import Calender from "../Components/Calender/Calender";
import Nav from "../Components/Navbar/Navbar";

const addNewTask = () => {
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

export default addNewTask;
