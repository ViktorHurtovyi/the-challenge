export const itemsFetchDataSuccess = (items) => ({
  type: 'ITEMS_FETCH_DATA_SUCCESS',
  items,
});

export const itemsFetchData = (url) => (dispatch) => {
  dispatch({ type: 'LOADING_START' });
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        dispatch({ type: 'FETCH_ERROR' });
      }
      return response;
    })
    .then((response) => response.json())
    .then((items) => dispatch(itemsFetchDataSuccess(items)));
};
