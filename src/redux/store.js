import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  value: 0,
};

// action;
// {
//   type: 'counter/increment';
// }

const actionTypes = {
  Increment: 'counter/increment',
  Decrement: 'counter/decrement',
  Set: 'counter/set',
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.Increment:
      return { value: state.value + 1 };
    case actionTypes.Decrement:
      return { value: state.value - 1 };
    case actionTypes.Set:
      return { value: action.payload };
    default:
      return state;
  }
}

const enhancers = composeWithDevTools();

const store = createStore(counterReducer, enhancers);

export default store;

const increment = () => ({ type: actionTypes.Increment });
const decrement = () => ({ type: actionTypes.Decrement });
const set = (payload) => ({ type: actionTypes.Set, payload: payload });

store.dispatch({ type: 'hi' });

store.dispatch(increment());

store.dispatch(decrement());

store.dispatch(set(8));
