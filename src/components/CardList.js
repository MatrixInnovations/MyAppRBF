import React from 'react';
import Card from './Card';


//PURE COMPONENTS!!!!
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  );
}

export default CardList;
