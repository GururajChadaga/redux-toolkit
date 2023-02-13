const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ['cake/ordered']: (state, action) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, actions) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
