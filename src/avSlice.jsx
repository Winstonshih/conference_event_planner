 import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://pixabay.com/images/download/business-computer-conference-20031_640.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/speakers-bluetooth-tech-speaker-4109274_640.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/public-speaking-mic-microphone-3926344_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/get/gb9877f1036fff7167d9bec26ca8b122c793b758f73eceefd4b4c1625baf47c30427910cc019b954a60e00004b8ce001e_640.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/images/download/signpost-waypoint-wood-grain-board-235079_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
