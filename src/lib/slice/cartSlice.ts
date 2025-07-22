import { createSlice, current } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: { productList: [], order: {} },
  reducers: {

  }
})

// export const { }

export default cartSlice.reducer;