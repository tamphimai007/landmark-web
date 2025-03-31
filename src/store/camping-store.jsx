import {
  addOrRemoveFavorite,
  filterCamping,
  listCamping,
  listFavorites,
} from "@/api/camping";
import { create } from "zustand";
// Step 1 Create Store
const campingStore = (set, get) => ({
  campings: [],
  favorites: [],
  actionListCamping: async (id) => {
    try {
      const res = await listCamping(id);
      // console.log('This is Zustand ',res.data.result)
      set({ campings: res.data.result });
    } catch (error) {
      console.log(error);
    }
  },
  actionAddorRemoveFavorite: async (token, data) => {
    try {
      // code body
      const res = await addOrRemoveFavorite(token, data);
      const camping = get().campings;
      // console.log(camping);
      const { campingId, isFavorite } = data;

      const updatedCamping = camping.map((item) => {
        return item.id === campingId
          ? { ...item, isFavorite: !isFavorite }
          : item;
      });

      // console.log(updatedCamping);
      set({ campings: updatedCamping });

      // Update favorites
      const favorites = get().favorites;
      const updatedFavorite = favorites.filter((item) => {
        return item.landmark.id !== campingId;
      });
      set({ favorites: updatedFavorite });

      // console.log(res.data.message);
      return { success: true, message: res.data.message };
      // logic
    } catch (error) {
      // console.log(error?.response?.data?.message);
      const err = error?.response?.data?.message;
      return { success: false, message: err };
    }
  },
  actionListFavorites: async (token) => {
    try {
      const res = await listFavorites(token);
      // console.log(res.data.result);
      set({ favorites: res.data.result });
    } catch (error) {
      console.log(error);
    }
  },
  actionFilter: async (category = "", search = "") => {
    try {
      const res = await filterCamping(category, search);
      // console.log("This is Zustand", res.data.result);
      set({ campings: res.data.result });
    } catch (error) {
      console.log(error);
    }
  },
});
const useCampingStore = create(campingStore);
// Step 2 Export Store
export default useCampingStore;
