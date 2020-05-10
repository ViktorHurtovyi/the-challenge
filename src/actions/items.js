export const itemsFetchDataSuccess = (items) => {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items,
  }
}

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_START" })
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          dispatch({ type: "FETCH_ERROR" })
        }

        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
  }
}
