import React from "react"
export default function Card(props){
    return (
        <div className="container">
     <h1>{props.item.name}</h1>
     <img src={props.item.image} alt="" width="200px" height="250px" />
     <h3>Role:{props.item.role}</h3>
    </div>
    )
}