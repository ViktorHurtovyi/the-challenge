import React from 'react';
import ReactDOM from 'react-dom';
import Item from './../item';
import {render} from "@testing-library/react";

const fetchData = [{"id":1,"label":"List item 1","parent_id":0}];
const fetchDataSorted = [{"id":1,"label":"sorted data","parent_id":0}];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item items={[]} sortedItems={[]} />, div);
});

it('render fetch data', () => {
    const { getByTestId } = render(<Item sortedItems={fetchDataSorted} items={fetchData} />);
    expect(getByTestId("list-default").textContent).toBe("List item 1")
});

it('render sorted data', () => {
    const { getByTestId } = render(<Item sortedItems={fetchDataSorted} items={fetchData} />);
    expect(getByTestId("list-sorted").textContent).toBe("sorted data")
});

it('empty values', () => {
    const { getByTestId } = render(<Item sortedItems={[]} items={[]} />);
    expect(getByTestId("list-default").textContent).toBe("")
    expect(getByTestId("list-sorted").textContent).toBe("")
});
