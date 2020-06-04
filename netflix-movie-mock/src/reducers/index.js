// this is the initial state
const initialState = {
  myLists:[],
  recommendation:[]
}

// reducer accept three actions with pre state, generate a new state.
const reducer = (state = initialState, action={}) => {
switch (action.type) {
  // fetch data at first render
  case 'FETCH_DATA':
      return {
      ...state,
      myLists: action.data.mylist,
      recommendation: action.data.recommendations
    }
    // remove the current item from mylist
  case 'REMOVE_ITEM':
    return {
      ...state,
      myLists: state.myLists.filter(list => list.id !== action.item.id),
      recommendation: [...state.recommendation, action.item]
    }
    // add the current item from recommendations to mylist
  case 'ADD_ITEM':
    return {
      ...state,
      myLists: [...state.myLists, action.item],
      recommendation: state.recommendation.filter(list => list.id !== action.item.id)
    }
  default:
    return state;
  }
}

export default reducer;
