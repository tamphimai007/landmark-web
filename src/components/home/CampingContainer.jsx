import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import CategoryLists from "./CategoryLists";
import { useSearchParams } from "react-router";

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  const actionFilter = useCampingStore((state) => state.actionFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  // Clerk
  const { user } = useUser();
  const id = user?.id ?? null;

  // useEffect(() => {
  //   // code
  //   // || find first true
  //   // && find first false
  //   // ?? nullist null or undefinded --> right

  //   // console.log("id", id);

  // }, [user?.id]);

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  useEffect(() => {
    // console.log('Are you Ready !!!!!')
    // console.log(category,search)
    if (search || category) {
      actionFilter(category, search);
    } else if (!search && !category) {
      actionListCamping(id);
    }
  }, [search, category]);

  return (
    <div>
      <CategoryLists />
      <MapHome />
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
