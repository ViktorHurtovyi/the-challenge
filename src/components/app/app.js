import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './app.css';
import ItemList from '../itemList';
import { sortItems } from '../../reducers/items';
import { loadData } from '../../actions/items';
import Error from '../error';
import Spinner from '../spinner';

const App = ({
  fetchData, loading, error, items, sortedItems,
}) => {
  useEffect(() => {
    fetchData();
  }, []);

  const showItem = () => {
    if (error === true) { return <Error />; }
    if (loading === true) { return <Spinner />; }
    return <ItemList items={items} sortedItems={sortedItems} />;
  };

  return showItem();
};


const mapStateToProps = (state) => ({
  items: state.items.items,
  sortedItems: sortItems(state),
  loading: state.items.loading,
  error: state.items.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
