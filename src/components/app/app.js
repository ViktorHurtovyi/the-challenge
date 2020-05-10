import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Error from "../error";
import Spinner from "../spinner";
import ItemList from "../itemList/itemList";
import {itemsFetchData} from "../../actions/items";

const App = () => {

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
        else return <ItemList />
    }

    return showItem();
}
export default App;
