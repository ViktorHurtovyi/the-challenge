import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import "./app.css"
import ItemList from "../itemList"
import {sortItems} from "../../reducers/items";
import {itemsFetchData} from "../../actions/items";
import Error from "../error";
import Spinner from "../spinner";

const App = () => {
    const items = useSelector((state) => state.items.items)
    const sortedItems = useSelector((state) => sortItems(state))

    const loading = useSelector((state) => state.items.loading)
    const error = useSelector((state) => state.items.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            itemsFetchData("http://5af1eee530f9490014ead8c4.mockapi.io/items")
        )
    }, [dispatch])

    const showItem = () => {
        if (error === true)
            return <Error/>
        if (loading === true)
            return <Spinner/>
        else return <ItemList items={items} sortedItems={sortedItems} />
    }

    return showItem();

}

export default App
