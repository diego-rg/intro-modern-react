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

    return <div>{season}</div>
}

export default SeasonDisplay;