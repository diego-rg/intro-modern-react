import React from "react";

//Refactorizamos os ternarios para sacar valores en un obxeto
const configSeason = {
    summer: {
        text: "Es verano... A la playa!",
        icon: "sun"
    },
    winter: {
        text: "Es invierno... A esquiar!",
        icon: "snowflake"
    }
}

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
    //Destructuramos usando o obxeto configSeason
    const { text, icon } = configSeason[season];

    return (
        <div>
            <i class={`${icon} outline icon`}></i>
            <h1>{text}</h1>
            <i class={`${icon} outline icon`}></i>
        </div>
    )
}

export default SeasonDisplay;