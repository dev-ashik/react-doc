import React, { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={()=> setDark(prevDark => !prevDark)}>Toggle theme</button>
    <List getItems={getItems}/>
    </div>
  );
};


const List = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("updating Item");
    }, [getItems])

    // console.log(items)
    return (
        <>
        {items.map(item => <p key={item}>{item}</p>)}
        </>
    )
}

export default UseCallback;
