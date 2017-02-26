import React from "react";

const Hallo = (props) => {
    console.log("Props: ", props);
    console.log("Props params: ", props.params);
    console.log("Props locations: ", props.location);
    return (
        <h2>Halloooo</h2>
    )
};

export default Hallo;
