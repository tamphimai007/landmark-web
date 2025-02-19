import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state)=>state.actionListCamping)
  
  useEffect(()=>{
    // code
    actionListCamping()
  },[])

  return (
    <div>
      <MapHome />
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
