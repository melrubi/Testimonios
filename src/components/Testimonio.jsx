import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props){  
  return (
    <div className='content-testimonio'>
      <img className='image-testimonio' 
            src={require(`../images/testimonio-${props.image}.png`)} //plantillas literales
            alt='testimonio' />
      
      <div className="content-text">
        <p className='name'><strong>{props.name}</strong> en {props.country}</p>
        <p className='job'>{props.job} en <b>{props.company}</b></p>
        <p className='text'>"{props.testimony}"</p>
      </div>

    </div>
  );
}

export default Testimonio;