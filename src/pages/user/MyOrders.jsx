// rafce
import { listBookings } from "@/api/booking";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { formatDate, formatNumber } from "@/utils/formats";

const MyOrders = () => {
  // JS
  const [bookings, setBookings] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    // code
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    // code
    const token = await getToken();
    try {
      const res = await listBookings(token);
      // console.log(res.data.result);
      setBookings(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>รหัสการจอง</TableHead>
            <TableHead>ชื่อ</TableHead>
            <TableHead>จำนวนคืน</TableHead>
            <TableHead>ราคารวม</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings?.map((item) => {
            const { id, total, totalNights, checkIn, checkOut } = item;
            const { title } = item.landmark;
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatNumber(total)}</TableCell>
                <TableCell>{formatDate(checkIn)}</TableCell>
                <TableCell>{formatDate(checkOut)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default MyOrders;
