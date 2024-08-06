import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);    

    if (resInfo === null) return <Shimmer />
    const {text} = resInfo.data.cards[0].card.card;
    const {cuisines, costForTwoMessage} = resInfo.data.cards[2].card.card.info;
    return (
        <div className="menu">
            <h1>{text}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards).map(function (r,index) {
                    return r.card.card.title ? <li key={index}>{r.card.card.title}</li> : null
                })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;