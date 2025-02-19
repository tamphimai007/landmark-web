import useBookingStore from "@/store/booking-store";

// rafce
const BookingForm = () => {
  const kaika = useBookingStore();
  console.log(kaika)
  return <div>BookingForm</div>;
};
export default BookingForm;
