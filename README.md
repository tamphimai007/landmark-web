## EP 10 Categories

```js
import {
  Tent,
  House,
  Mountain,
  Store,
  Utensils,
  Hotel,
  Bed,
} from "lucide-react";

export const categories = [
  {
    label: "camping",
    icon: Tent,
  },
  {
    label: "house",
    icon: House,
  },
  {
    label: "hotel",
    icon: Hotel,
  },
  {
    label: "hostel",
    icon: Bed,
  },
  {
    label: "moutain",
    icon: Mountain,
  },
  {
    label: "store",
    icon: Store,
  },
  {
    label: "food",
    icon: Utensils,
  },
];
```

## PDF

```jsx
import { formatDate } from "@/utils/formats";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from "@react-pdf/renderer";
import { FileText, RotateCw } from "lucide-react";

// font thai ตรง src
// ชื่อต้องตรงกับไฟล์ที่อยู่ใน folder /public/fonts/NotoSansThai.ttf
Font.register({
  family: "NotoSansThai",
  src: "/fonts/NotoSansThai.ttf",
});

// style Invoice
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "NotoSansThai",
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  cellHeader: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },
  cell: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
  },
  total: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
});

const BookingInvoice = ({ booking }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Invoice */}
      <View style={styles.section}>
        <Text style={styles.header}>รอยไถ พัฒนา</Text>
        <Text>รหัสการจอง: {booking.id}</Text>
        <Text>ชื่อที่พัก: {booking.landmark.title}</Text>
        <Text>วันที่ออกใบเสร็จ: {formatDate(new Date())}</Text>
      </View>

      {/* ตารางแสดงรายละเอียด */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>จำนวนคืน </Text>
          <Text style={styles.cellHeader}>ราคารวม</Text>
          <Text style={styles.cellHeader}>Check In</Text>
          <Text style={styles.cellHeader}>Check Out</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{booking.totalNights} คืน</Text>
          <Text style={styles.cell}>{booking.total} บาท</Text>
          <Text style={styles.cell}>{formatDate(booking.checkIn)}</Text>
          <Text style={styles.cell}>{formatDate(booking.checkOut)}</Text>
        </View>
      </View>

      {/* สรุปยอดรวม */}
      <View style={styles.section}>
        <Text style={styles.total}>ยอดรวม: {booking.total} บาท</Text>
      </View>
    </Page>
  </Document>
);

const BookingPDF = ({ booking }) => {
  return (
    <div>
      <PDFDownloadLink
        document={<BookingInvoice booking={booking} />}
        fileName={`invoice-${booking.id}.pdf`}
      >
        {({ loading }) =>
          loading ? <RotateCw className="animate-spin" /> : <FileText />
        }
      </PDFDownloadLink>
    </div>
  );
};

export default BookingPDF;
```
