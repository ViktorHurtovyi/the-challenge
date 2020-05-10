/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ItemList from '../itemList';

const fetchData = [{ id: 1, label: 'List item 1', parent_id: 0 }];
const fetchDataSorted = [{ id: 1, label: 'sorted data', parent_id: 0 }];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemList items={[]} sortedItems={[]} />, div);
});

it('render fetch data', () => {
  const { getByTestId } = render(<ItemList sortedItems={fetchDataSorted} items={fetchData} />);
  expect(getByTestId('list-default').textContent).toBe('List item 1');
});

it('render sorted data', () => {
  const { getByTestId } = render(<ItemList sortedItems={fetchDataSorted} items={fetchData} />);
  expect(getByTestId('list-sorted').textContent).toBe('sorted data');
});

it('empty values', () => {
  const { getByTestId } = render(<ItemList sortedItems={[]} items={[]} />);
  expect(getByTestId('list-default').textContent).toBe('');
  expect(getByTestId('list-sorted').textContent).toBe('');
});
