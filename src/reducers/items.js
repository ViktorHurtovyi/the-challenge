const initialState = {
  items: [],
  loading: true,
  error: false,
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return {
        ...state, items: action.items, loading: false, error: false,
      };
    case 'LOADING_START':
      return { ...state, loading: true };
    case 'FETCH_ERROR':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export const sortItems = (state) => {
  const tree = [];
  const arrayWithChildren = [];

  state.items.items.forEach((item) => {
    arrayWithChildren[item.id] = item;
    arrayWithChildren[item.id].children = [];
  });

  arrayWithChildren.forEach((item) => {
    if (item.parent_id) {
      arrayWithChildren[item.parent_id].children.push(item);
    } else {
      tree.push(item);
    }
  });
  return tree;
};
