"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useState } from "react";
import Specifications from "./Specifications";
import Review from "./Review";
const CarDescriptions = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }} mt={3}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} px={2}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
              textColor="secondary"
            >
              <Tab
                label="Description"
                value="1"
                color="black"
                style={{ color: "black" }}
              />
              <Tab label="Equipments" value="2" style={{ color: "black" }} />
              <Tab
                label="specifications"
                value="3"
                style={{ color: "black" }}
              />
              <Tab label="Reviews" value="4" style={{ color: "black" }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="container mx-auto">
              <p className="text-base text-gray-600 font-sans">
                This 2018 model car is Brilliant Black Crystal Pearlcoat with a
                Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge
                Ram Surprise has been exceeding customer expectations for many
                years and always provide customers with a great value!
              </p>
              <p className="text-base text-gray-600 font-sans mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum neque modi, nam quibusdam quia amet cupiditate similique
                beatae exercitationem autem ad inventore rem ipsum recusandae
                ipsa accusamus reprehenderit quis commodi.
              </p>
              <p className="text-base text-gray-600 font-sans mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum neque modi, nam quibusdam quia amet cupiditate similique
                beatae exercitationem autem ad inventore rem ipsum recusandae
                ipsa accusamus reprehenderit quis commodi.
              </p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="grid grid-cols-3">
              <div className="grid gap-y-3 text-sm">
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Pay at Pick-Up
                </h3>
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Budget Car
                </h3>
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Chilled
                </h3>
              </div>
              <div className="grid gap-y-3 text-sm">
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Automatic
                </h3>
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Free cancellation
                </h3>
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Unlimited Mileage
                </h3>
              </div>
              <div className="grid gap-y-3 text-sm">
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Audio input
                </h3>
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Bluetooth
                </h3>
                <h3 className=" text-gray-800 font-sans">
                  <span className="text-red-600">+</span>Heated seats
                </h3>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <Specifications />
          </TabPanel>
          <TabPanel value="4">
            <Review />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default CarDescriptions;
