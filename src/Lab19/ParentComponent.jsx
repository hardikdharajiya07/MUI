// Write a code which Add items using memoized addItem handler passed to child
// component from the parent component, make sure child does not re-render
// unnecessarily. (A)

import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [items, setItems] = useState([])

    const addItem = useCallback(() => {
        setItems(prevItems => [...prevItems, prevItems.length + 1])
    }, [])

    return (
        <div>
            <h1>Items: {items.length}</h1>
            <ChildComponent addItem={addItem} />
        </div>
    )
}

export default ParentComponent

