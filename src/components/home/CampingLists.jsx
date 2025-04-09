import CampingCard from "../card/CampingCard";
import useCampingStore from "@/store/camping-store";
import EmptyList from "./EmptyList";

// rafce
const CampingLists = () => {
  const campings = useCampingStore((state) => state.campings);

  // console.log("roitai", campings.length);

  if (campings.length === 0) {
    return <EmptyList />;
  }

  return (
    <section
      className="grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4"
    >
      {campings.map((item) => {
        return <CampingCard key={item.id} camping={item} />;
      })}
    </section>
  );
};
export default CampingLists;
