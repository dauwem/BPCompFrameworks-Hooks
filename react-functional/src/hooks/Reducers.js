export function countReducer(state, action) {
  if (action.type === 'increment') {
    return { count: state.count + 1 };
  }
  else if (action.type === 'decrement' && state.count !== 0) {
    return { count: state.count - 1 };
  }
  return state;
}