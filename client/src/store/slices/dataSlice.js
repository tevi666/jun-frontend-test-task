const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	tick: [],
	resultList: [],
	finished: false,
};
const dataSlice = createSlice({
	name: 'dataSlice',
	initialState,
	reducers: {
		setTick: (state, action) => {
			state.tick = action.payload;
		},
		setResultList: (state, action) => {
			state.resultList = action.payload;
		},
		setFinished: (state, action) => {
			state.finished = action.payload;
		},
	},
});
export const dataSliceReducer = dataSlice.reducer;
export const { setTick, setResultList, setFinished } = dataSlice.actions;