import React from "react";


function CartHouses ({ data }) {

    return (
        <div className="boxCart">
            <div className="boxCart__caruselImages">{}</div>
            <div className="boxCart__title">{}</div>
            <div className="boxCart__prise">{}</div>
            <div className="boxCart__adress">{}</div>
            <div className="boxCart__description">{}</div>
        </div>
    )
}