import React from "react";

type TechnologiesPropsType = {
    title:string
}
function Technologies(props:TechnologiesPropsType) {
    return (
        <div>
            <ul>
                <li>{props.title}</li>
            </ul>
        </div>
    )
}

export default Technologies;