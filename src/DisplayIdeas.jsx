import React, { useState } from "react"

function DisplayIdeas (props) {
    // use map function on the array to iterate & return each item
    // as an ordered list
    let crazyIdeas = props.ideas.map(idea => <li>{idea}</li>)

    return(
        <div>
            <ul>
                {crazyIdeas}
            </ul>
        </div>
    )
}

export default DisplayIdeas
