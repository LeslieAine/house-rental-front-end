import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'http://127.0.0.1:3000/api/v1/houses';

export const fetchHouse = createAsyncThunk("house/fetchHouse", async (id) => {
  const url = `${baseUrl}/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const houseSlice = createSlice({
  name: 'houses',
  initialState: {
    loading: false,
    house: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHouse.fulfilled, (state, action) => {
        state.loading = false;
        state.house = action.payload;
    })
  },
});

export default houseSlice.reducer;
