import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import "./items.css"
import Item from "../item"

const ItemList = () => {
    const items = useSelector((state) => state.items.items)

    const [itemList, setItems] = useState([])

    useEffect(() => {
        sortItems()
    }, [items])


    const sortItems = () => {
        const tree = []
        const arrayWithChildren = []

        items.map((item) => {
            arrayWithChildren[item.id] = item
            arrayWithChildren[item.id].children = []
        })

        arrayWithChildren.map((item) => {
            if (item.parent_id) {
                arrayWithChildren[item.parent_id].children.push(item)
            } else {
                tree.push(item)
            }
        })

        setItems(tree)
    }

   return <Item items={items} sortedItems={itemList} />

}

export default ItemList
