// rafce

import { listStats } from "@/api/admin";
import StateCard from "./StateCard";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const StateContainer = () => {
  // JS
  const [data, setData] = useState();
  const { getToken } = useAuth();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    // code body
    const token = await getToken();
    try {
      const res = await listStats(token);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2">
      <StateCard label="Users" value={data?.usersCount || 0} />
      <StateCard label="Campings" value={data?.campingsCount || 0 } />
      <StateCard label="Bookings" value={data?.bookingsCount || 0} />
    </div>
  );
};
export default StateContainer;
