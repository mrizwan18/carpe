import { createSlice } from "@reduxjs/toolkit";

// Initial pool data for the store
const initialState = {
  pools: [
    {
      id: 1,
      image: "/car2.jpeg",
      altImageText: "test",
      tag: "HOT",
      tagColor: "primaryOrange-light",
      headerText: "2 seats",
      title: "New Pool bro from abc to opao[psaspodipasidpasidpaosidpaispdiaspodiapsoidpasdip",
      mapLink: "https://test.com",
      address: "ABC Roads",
      timein: "8:00 A.M.",
      timeout: "6:00 P.M.",
      poolId: "465768",
    },
    {
      id: 2,
      image: "/car_1.webp",
      altImageText: "test",
      tag: "HOT",
      tagColor: "primaryRed-light",
      headerText: "2 seats",
      title: "New Pool bro",
      mapLink: "https://test.com",
      address: "ABC Roads",
      timein: "8:00 A.M.",
      timeout: "6:00 P.M.",
      poolId: "465769",
    },
    {
      id: 3,
      image: "/car_1.webp",
      altImageText: "test",
      tag: "New",
      tagColor: "primaryBlue-light",
      headerText: "2 seats",
      title: "New Pool bro",
      mapLink: "https://test.com",
      address: "ABC Roads",
      timein: "8:00 A.M.",
      timeout: "6:00 P.M.",
      poolId: "465770",
    },
    {
      id: 4,
      image: "/car_1.webp",
      altImageText: "test",
      tag: "HOT",
      tagColor: "primaryOrange-light",
      headerText: "2 seats",
      title: "New Pool bro",
      mapLink: "https://test.com",
      address: "ABC Roads",
      timein: "8:00 A.M.",
      timeout: "6:00 P.M.",
      poolId: "465771",
    },
  ],
};

export const poolSlice = createSlice({
  name: "pools",
  initialState,
  reducers: {},
});

export const selectPools = (state) => state.pools.pools;
export default poolSlice.reducer;
