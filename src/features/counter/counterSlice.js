import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'gallery',

  initialState: {
    value: [
      { url: "img/portfolio/01-large.jpg", title: "Lorem Ipsum", cat: "lawn", img: "img/portfolio/01-small.jpg" },
      { url: "img/portfolio/02-large.jpg", title: "Adipiscing Elit", cat: "planting", img: "img/portfolio/02-small.jpg" },
      { url: "img/portfolio/03-large.jpg", title: "lawn project two", cat: "lawn", img: "img/portfolio/03-small.jpg" },
      { url: "img/portfolio/04-large.jpg", title: "lawn project three", cat: "lawn", img: "img/portfolio/04-small.jpg" },
      { url: "img/portfolio/05-large.jpg", title: "planting project two", cat: "planting", img: "img/portfolio/05-small.jpg" },
      { url: "img/portfolio/06-large.jpg", title: "Dolor Sit", cat: "garden", img: "img/portfolio/06-small.jpg" },
      { url: "img/portfolio/07-large.jpg", title: "garden project two", cat: "garden", img: "img/portfolio/07-small.jpg" },
      { url: "img/portfolio/08-large.jpg", title: "lawn project four", cat: "lawn", img: "img/portfolio/08-small.jpg" },
      { url: "img/portfolio/09-large.jpg", title: "planting project three", cat: "planting", img: "img/portfolio/09-small.jpg" }
    ],
    currentValue: []
  },
  reducers: {
    init: state=>{

      state.currentValue = [...state.value]

    },
    lawn: state => {
      state.currentValue = state.value.filter(function (obj) {
        if (obj.cat === "lawn") {
          console.log(obj)
          return obj
        }
      })

    },
    planting: state => {
      state.currentValue = state.value.filter(function (obj) {
        if (obj.cat === "planting") {
          return obj
        }
      })
    },
    garden: state => {
      state.currentValue = state.value.filter(function (obj) {
        if (obj.cat === "garden") {
          return obj
        }
      })
    },
    
  },
});

export const { lawn, planting, garden, init } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// state.counter.currentValue = state.counter.value
export const selectCount = state => state.counter.currentValue;

export default counterSlice.reducer;
