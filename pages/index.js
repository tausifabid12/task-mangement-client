import { useContext } from 'react';
import AllTaskTab from '../Components/AllTasksTab/AllTaskTab';
import Hero from '../Components/Hero/Hero';
import HomeContent from '../Components/Home/HomeContent';
import Layout from '../Components/Layout/Layout';
import Nav from '../Components/Navbar/Navbar';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

export default function Home() {
  const { user, loading } = useContext(AuthContext);
  return (
    <Layout title="Home Page">
      <HomeContent />
      {user?.email && <AllTaskTab></AllTaskTab>}
    </Layout>
  );
}
