import React from 'react';

export const Schedules: React.FC = () => {
  return (
    <div>
      <h1 className='header'>Reptile Schedules Page</h1>
      <ul>
        <li>
          <a className="link" href="/husbandryRecords">Husbandry Records</a>
        </li>
        <li>
          <a className="link" href="/Reptile">Add a Snake</a>
        </li>
      </ul>
    </div>
  );
};