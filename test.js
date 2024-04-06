function getNextState(state, action, player) {
  // the top row is index zero,
  // so the place of action is the highest row of the action column
  const row = state.findIndex((col, i) => col[action] === 0);
  console.log(row);
  state[row][action] = player;
  return state;
}

function getValidMoves(state) {
  // return all column index where row 0 is empty
  return state[0].map((col, i) => (col === 0 ? 1 : 0));
}

const state = [
  [1, 0, -1],
  [0, 1, 0],
  [-1, -1, 0],
];
const output = getValidMoves(state);
console.log(output);
