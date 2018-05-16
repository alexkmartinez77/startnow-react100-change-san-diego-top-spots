import React from 'react';

export default props => (

    <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href = {"https://maps.google.com/?q=" + props.location} className ="button" target="_blank">Open In Google Maps</a>

    </div>
);