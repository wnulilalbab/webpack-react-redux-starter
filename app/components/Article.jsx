import React from "react";

const Article = (props) => {
    console.log("Props params: ");

    var handleSubmit = function (action){
        console.log("mantab");
        props.router.push({
                query: { modal: true },
            });
    };

    return (
        <h2 onClick={handleSubmit}>Article</h2>
    );
};

export default Article;
