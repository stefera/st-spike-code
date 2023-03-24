import { createClient } from "@google/maps";
import { config } from "dotenv";
config();

const gmaps = createClient({
  key: env.API_KEY_MAPS,
  Promise: Promise,
});
const test = () => {
  const locations = [
    {
      name: "The Warehouse Project",
      address: "Store Street, Manchester M1 2WA",
    },
    { name: "Albert Hall", address: "27 Peter St, Manchester M2 5QR" },
    {
      name: "The Refinery",
      address: "1 Hardman Blvd, Manchester M3 3AQ",
    },
    {
      name: "The Ivy Manchester",
      address: "Hardman Square, Manchester M3 3HG",
    },
    {
      name: "20 Stories",
      address: "No 1 Spinningfields, 1 Hardman Square, Manchester M3 3EB",
    },
    { name: "Cloud 23", address: "303 Deansgate, Manchester M3 4LQ" },
    {
      name: "The Milton Club",
      address: "244 Deansgate, Manchester M3 4BQ",
    },
    {
      name: "The Liquor Store",
      address: "27-29 Bridge St, Manchester M3 3BZ",
    },
    {
      name: "Peaky Blinders Bar",
      address: "23 Peter St, Manchester M2 5QR",
    },
    {
      name: "The Alchemist",
      address: "1 New York St, Manchester M1 4HD",
    },
  ];

  // console.log(locations, "final step", Array.isArray(locations));
  console.log(process.env.API_KEY_MAPS);
  // Promise.all(
  //   locations.map(async (location) => {
  //     const response = await gmaps
  //       .geocode({ address: location.address })
  //       .asPromise();
  //     if (response.status === 200) {
  //       location.coordinates = response.json.results[0].geometry.location;
  //     } else {
  //       console.log(response.error_message);
  //     }
  //     console.log(locations, "geoCodedArray");
  //   })
  // );
};
test();
