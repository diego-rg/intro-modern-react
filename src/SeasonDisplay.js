import React from "react";

const month = new Date().getMonth();

const getSeason = (lat, month) => {
    if (month > 2 && month< 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat < 0 ? "summer" : "winter";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, month);
    const text = season === "winter" ? "Es invierno... A esquiar!" : "Es verano... A la playa!";
    const icon = season === "winter" ? "snowflake" : "sun";

    return (
        <div>
            <i class={`${icon} outline icon`}></i>
            <h1>{text}</h1>
            <i class={`${icon} outline icon`}></i>
        </div>
    )
}

export default SeasonDisplay;