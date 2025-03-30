import { SignInButton } from "@clerk/clerk-react";
import { Heart, RotateCw } from "lucide-react";

export const CardSubmitButtons = ({ isPending, isFavorite }) => {
  // console.log(isPending)
  return (
    <button>
      {isPending ? (
        <RotateCw className="animate-spin" />
      ) : isFavorite ? (
        <Heart
          className="hover:scale-110 hover:duration-300"
          fill="red"
          size={34}
          stroke="white"
        />
      ) : (
        <Heart
          className="hover:scale-110 hover:duration-300"
          fill="black"
          fillOpacity="70%"
          size={34}
          stroke="white"
        />
      )}
      {/* {
        isPending
        ? <RotateCw className="animate-spin"/>
        : <Heart
        className="hover:scale-110 hover:duration-300"
        fill="red"
        size={34}
        stroke="white"
      />
      } */}
    </button>
  );
};

export const CardSignInButtons = () => {
  return (
    <div>
      <SignInButton mode="modal">
        <button>
          <Heart
            className="hover:scale-110 hover:duration-300"
            fill="black"
            fillOpacity="70%"
            size={34}
            stroke="white"
          />
        </button>
      </SignInButton>
    </div>
  );
};
