// rafce
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useAuth } from "@clerk/clerk-react";
import { checkOut } from "@/api/booking";
import { useParams } from "react-router";
const stripePromise = loadStripe("");

const Checkout = () => {
  // Javascript
  const { getToken } = useAuth();
  const { id } = useParams();

  const fetchClientSecret = async () => {
    const token = await getToken();
    try {
      const res = await checkOut(token, id);
      return res.data.clientSecret;
    } catch (error) {
      console.log(error);
    }
  };

  const options = { fetchClientSecret };
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};
export default Checkout;
