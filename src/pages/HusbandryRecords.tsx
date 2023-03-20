import React from 'react';

export const HusbandryRecords: React.FC = () => {
  return (
    <div>
      <h1 className="header" >Reptile Husbandry Record Page</h1>
      <ul>
        <li>
          <a className="link" href="/Schedules">Schedules</a>
        </li>
        <li>
          <a className="link" href="/Reptile">Add a Snake</a>
        </li>
      </ul>
    </div>
  );
};