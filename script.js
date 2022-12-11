const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type == "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);

const render = () => {
  console.log("hi a am here");
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

render();
store.subscribe(render);

incrementEl.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});
