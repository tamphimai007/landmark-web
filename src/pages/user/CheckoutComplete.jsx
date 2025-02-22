import { checkOutStatus } from "@/api/booking";
import { createAlert } from "@/utils/createAlert";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

// rafce
const CheckoutComplete = () => {
  const navigate = useNavigate();
  const { session } = useParams();
  const { getToken } = useAuth();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // code
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    const token = await getToken();
    try {
      const res = await checkOutStatus(token, session);
      setStatus(res.data.status);
      createAlert("success", res.data.message);
      navigate("/user/myorders");
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "open") {
    return <Navigate to="/" />;
  }

  return <div>Loading...</div>;
};
export default CheckoutComplete;
