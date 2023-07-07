import React from "react";
import CarsImage from "./CarsImage";

const CarDetail = () => {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" flex flex-col">
            <div>
              <CarsImage />
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quo, libero mollitia delectus, beatae debitis voluptatibus maiores
              a deserunt harum, nesciunt facilis doloribus adipisci minus ullam
              officiis assumenda quasi quisquam!
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            necessitatibus voluptatibus, eos repellat ab, maiores nostrum quia
            cum aspernatur quasi excepturi. Laboriosam accusantium quis deserunt
            amet dolore, praesentium quia commodi!
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
