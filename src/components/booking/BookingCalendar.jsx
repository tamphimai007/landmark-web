// rafce
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import useBookingStore from "@/store/booking-store";

const defaultSelected = {
  from: undefined,
  to: undefined,
};

const BookingCalendar = () => {
  const [range, setRange] = useState(defaultSelected);

  //   console.log(range);
  useEffect(() => {
    // code body
    useBookingStore.setState({
      range: range,
    });
    // console.log('Jukkru')
  }, [range]);

  return (
    <div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        // disabled={range}
        className="rounded-md border"
      />
    </div>
  );
};
export default BookingCalendar;
