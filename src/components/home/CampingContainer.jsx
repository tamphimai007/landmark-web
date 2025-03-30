import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);

  // Clerk
  const { user } = useUser();

  useEffect(() => {
    // code
    // || find first true
    // && find first false
    // ?? nullist null or undefinded --> right
    const id = user?.id ?? null;
    // console.log("id", id);
    actionListCamping(id);
  }, [user?.id]);

  return (
    <div>
      <MapHome />
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
