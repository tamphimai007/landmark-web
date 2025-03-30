// rafce
import CampingCard from "@/components/card/CampingCard";
import useCampingStore from "@/store/camping-store";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const MyFavorites = () => {
  const { getToken } = useAuth();
  const actionListFavorites = useCampingStore(
    (state) => state.actionListFavorites
  );
  const favorites = useCampingStore((state) => state.favorites);

  useEffect(() => {
    // code
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    // code body
    const token = await getToken();
    actionListFavorites(token);
  };

  return (
    <section
      className="grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4"
    >
      {favorites.map((item) => {
        // console.log(item)
        return <CampingCard key={item.id} camping={item.landmark} />;
      })}
    </section>
  );
};
export default MyFavorites;
