"use client";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactNumber = () => {
  const styles2 = {
    backgroundImage: `url('/banner5.jpg')`,
    backgroundSize: "cover",
  };
  return (
    <section className="mt-48">
      <div className="bg-fixed bg-cover bg-center" style={styles2}>
        <div className="grid grid-cols-1 md:grid-cols-3 py-28 container mx-auto">
          <h1 className="text-2xl font-bold font-serif text-white tracking-wider">
            Booking Your Next Ride
          </h1>
          <div className="flex gap-2">
            <LocalPhoneIcon className="text-3xl text-red-600" />
            <h1 className="text-2xl font-bold  font-serif text-white tracking-wider">
              (800) 650 743 Operators
            </h1>
          </div>
          <h1 className="text-2xl font-bold font-serif text-white tracking-wider">
            available 24/7
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactNumber;
