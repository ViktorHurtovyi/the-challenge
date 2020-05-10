const initialState = {
  items: [],
  loading: true,
  error: false,
}

export function items(state = initialState, action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return { ...state, items: action.items, loading: false, error: false }
    case "LOADING_START":
      return { ...state, loading: true }
    case "FETCH_ERROR":
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}
