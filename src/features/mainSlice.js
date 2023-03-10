import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    screen:window.innerWidth,
};
const mainSlice = createSlice({
name: 'main',
initialState,
reducers:{
      getScreenWidth:(state,action)=>{
        state.screen=action.payload;
      },
}
});

export const {getScreenWidth}=mainSlice.actions;
export default mainSlice.reducer;
