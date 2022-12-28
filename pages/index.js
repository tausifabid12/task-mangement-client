import { useContext } from "react";
import AllTaskTab from "../Components/AllTasksTab/AllTaskTab";
import Hero from "../Components/Hero/Hero";
import HomeContent from "../Components/Home/HomeContent";
import Nav from "../Components/Navbar/Navbar";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

export default function Home() {
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="mx-auto max-w-screen">
      <Nav></Nav>
      <HomeContent />
      {user?.email && <AllTaskTab></AllTaskTab>}
    </div>
  );
}
