import useBookingStore from "@/store/booking-store";
import { Card, CardTitle } from "../ui/card";
import { calTotal } from "@/utils/booking";
import { formatNumber } from "@/utils/formats";
import BookingConfirm from "./BookingConfirm";

// rafce
const BookingForm = () => {
  const price = useBookingStore((state) => state.price);
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;

  // Total
  const result = calTotal(checkIn, checkOut, price);
  // console.log(result);

  if (!range || !range.from || !range.to) return null;

  return (
    <div>
      <Card className="p-8 my-2">
        <CardTitle className="mb-4">สรุป</CardTitle>
        <p className="flex justify-between">
          <span>{`฿${price} x ${result.totalNights} คืน `}</span>
          <span className="font-semibold">{formatNumber(result.total)}</span>
        </p>
      </Card>
      {/* Confirm Booking */}
      <BookingConfirm />
    </div>
  );
};
export default BookingForm;
