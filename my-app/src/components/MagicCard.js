import React from 'react';

const MagicCard = ({ magic }) => {
  return (
    <div className='magic-container'>
      {Object.values(magic).map(card => (
    	<div key={card.id} className='card-container'>
            <img src={card.imageUrl} alt={card.name} />
                <p>Set: {card.setName}</p>
                <p>Name: {card.name}</p>
                <p>Color: {card.colors}</p>
                <p>{card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default MagicCard;