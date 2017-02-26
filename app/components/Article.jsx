import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

const Article = (props) => {
    console.log("Props params: ");

    var handleSubmit = function (action){
        console.log("mantab");
        props.router.push({
                query: { modal: true },
            });
    };

    return (
        <div>
            <h2 onClick={handleSubmit}>Article</h2>
            <ButtonToolbar>
                <Button bsStyle="primary">Default button</Button>
                <Button>Default button</Button>
            </ButtonToolbar>
        </div>
    );
};

export default Article;
