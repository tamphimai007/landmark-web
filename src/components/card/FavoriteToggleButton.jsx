// rafce

import useCampingStore from "@/store/camping-store";
import { CardSignInButtons, CardSubmitButtons } from "./CardButtons";
import { useForm } from "react-hook-form";
import { useAuth, useUser } from "@clerk/clerk-react";
import { createAlert, createNofity } from "@/utils/createAlert";

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
  // Clerk
  const { getToken, isSignedIn } = useAuth();
  // const { user } = useUser();
  // Hook-Form
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  // Zustand
  const actionAddorRemoveFavorite = useCampingStore(
    (state) => state.actionAddorRemoveFavorite
  );
  // const actionListCamping = useCampingStore((state) => state.actionListCamping);

  const hdlSumbit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();
    // console.log(token)
    const res = await actionAddorRemoveFavorite(token, {
      campingId,
      isFavorite,
    });
    if (res.success) {
      createNofity("success", res.message);
    } else {
      createNofity("error", res.message);
    }
    // actionListCamping(user.id);
  };

  // console.log(campingId, isFavorite);

  if(!isSignedIn){
    return <CardSignInButtons />
  }


  return (
    <form onSubmit={handleSubmit(hdlSumbit)}>
      <CardSubmitButtons isPending={isSubmitting} isFavorite={isFavorite} />
    </form>
  );
};
export default FavoriteToggleButton;
