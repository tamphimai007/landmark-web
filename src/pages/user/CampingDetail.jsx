// rfce

import { readCamping } from "@/api/camping";
import BookingContainer from "@/components/booking/BookingContainer";
import Breadcrums from "@/components/campings/Breadcrums";
import Description from "@/components/campings/Description";
import ImageContainer from "@/components/campings/ImageContainer";
import Mainmap from "@/components/map/Mainmap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CampingDetail() {
  const [camping, setCamping] = useState([]);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    // code
    fetchCampingDetail(id);
  }, []);

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      setCamping(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("lat", camping.lat);
  // && find first False
  // const roitai = 1 && true && 1 && 0;
  // console.log(roitai);
  return (
    <div>
      {/* Breadcrums */}
      <Breadcrums name={camping.title} />
      {/* Header */}
      <header className="flex items-center justify-between mt-2">
        <h1 className="text-4xl font-bold">{camping.title}</h1>

        <div className="flex gap-2">
          <p>Share</p>
          <p>Fovorite</p>
        </div>
      </header>
      {/* Image */}
      <ImageContainer image={camping.secure_url} name={camping.name} />
      {/* Description  & Map*/}

      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <Description text={camping.description} />
          {camping.lat && <Mainmap location={[camping.lat, camping.lng]} />}
        </div>
        {/* Calender */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingContainer
            campingId={camping.id}
            price={camping.price}
            bookings={[]}
          />
        </div>
      </section>
    </div>
  );
}
export default CampingDetail;
