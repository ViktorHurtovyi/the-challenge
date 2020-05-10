import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import "./items.css"
import List from "./list"

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

    const cycle = (child) => {
        return (
            <ul className="element">
                {child.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>
                                <span>{item.label}</span>
                            </li>
                            {item.children ? cycle(item.children) : ""}
                        </div>
                    )
                })}
            </ul>
        )
    }

   return <List items={items} sortedItems={cycle(itemList)}/>

}

export default ItemList
