// this is a modification of "immutable-using-immutable.js" code
// that uses Redux store and actions instead of plain callbacks
// to modify a single immutable data structure
// see good large example in
// http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
var immutable = require('immutable');
var redux = require('redux');

// initial state is very simple - just empty list of numbers
var INITIAL_STATE = immutable.fromJS({
  numbers: []
});

// individual actions on the state
function setNumbers(state, numbers) {
  return state.set('numbers', immutable.List(numbers));
}

function mul(a, b) { return a * b; }

function multiply(state, constant) {
  var byConstant = mul.bind(null, constant);
  return state.updateIn(['numbers'], function (ns) {
    return ns.map(byConstant);
  });
}

function print(state, printer) {
  printer(state.get('numbers'));
  return state;
}


// reducer function (state, action) => new state
function reducer(state, action) {
  if (!state) {
    state = INITIAL_STATE;
  }

  switch (action.type) {
    case 'SET_NUMBERS': {
      return setNumbers(state, action.numbers);
    }
    case 'MULTIPLY': {
      return multiply(state, action.constant);
    }
    case 'PRINT': {
      return print(state, action.printer);
    }
  }
  return state;
}

// our program is just a plain list of actions
var actions = [{
  type: 'SET_NUMBERS',
  numbers: [3, 1, 7]
}, {
  type: 'MULTIPLY',
  constant: 2
}, {
  type: 'PRINT',
  printer: console.log.bind(console)
}];

// we could use reducer to reduce a list of actions
// (hence the name "reducer")
var computedState = actions.reduce(reducer, INITIAL_STATE);
// List [ 6, 2, 14 ]
console.log('computed state', computedState);
// computed state Map { "numbers": List [ 6, 2, 14 ] }

//
// OR we can use a Redux Store - a wrapper for state for the state
//

// redux store that knows how to use our reducer function
var store = redux.createStore(reducer);

// execute our actions against a store
actions.forEach(store.dispatch);
console.log('final state', store.getState());
/*
List [ 6, 2, 14 ]
final state Map { "numbers": List [ 6, 2, 14 ] }
*/
