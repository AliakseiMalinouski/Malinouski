import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { itemsEvents } from "../events";
import { loadItems } from "../Redux/loadItems";
import { useNavigate } from "react-router-dom";

export const Items = React.memo(() => {

    const [searchValue, setSearchValue] = useState("");

    const items = useSelector(state => state.items.data);
    const loadState = useSelector(state => state.items.loadState);

    let dispatch = useDispatch();
    
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(loadItems)
    }, [dispatch]);

    useEffect(() => {
        itemsEvents.addListener('ViewCardGrid', viewChildCard);
        return () => {
            itemsEvents.removeListener('ViewCardGrid', viewChildCard);
        }
    }, []);

    const viewChildCard = (name) => {
        const uri = "/details/" + name;
        navigate(uri);
    }

    return (
        <div style={{ width: '1220px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexFlow: 'wrap', paddingTop: '50px', position: 'relative'}}>
            <input style={{width: '50%'}} type='number' placeholder="item's id(1-6)" value={searchValue}  onChange={(EO) => {
                setSearchValue(EO.target.value);
            }} />
            {
                (searchValue === "") ? <div style={{position: 'absolute', left: '0px', top: '100px', color: 'red', fontWeight: 'bold'}}>print the product id</div> : null
            }
            {(loadState === 1) && <div>...Loading</div>}
            {(loadState === 2) && items.data.filter(element => {
                return element.id == searchValue
            }).map(el => <Item key={el.id} code={el.id} name={el.name} year={el.year} color={el.color} pantone_value={el.pantone_value} />)}
            {(loadState === 3) && <div>Error</div>}
        </div>
    )
})