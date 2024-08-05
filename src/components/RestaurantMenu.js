import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [restaurantMenuData, setRestaurantMenuData] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    async function fetchMenu() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestaurantMenuData(json);
    }
    if (restaurantMenuData === null) return <Shimmer />
    const {text} = restaurantMenuData.data.cards[0].card.card;
    const {cuisines, costForTwoMessage} = restaurantMenuData.data.cards[2].card.card.info;
    return (
        <div className="menu">
            <h1>{text}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {(restaurantMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards).map(function (r,index) {
                    return r.card.card.title ? <li key={index}>{r.card.card.title}</li> : null
                })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;