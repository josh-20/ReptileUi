import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <body>
      <div className='header-container'>
      <h1 className="header" >Reptile Husbandry Dashboard</h1>
      </div>
      <ul className="container">
        <h3 className='content' id="padder">Welcome fellow snake enthusiast! If you have aquired a new scaly pet, please click the red link just below!</h3>
        <li id="reptile">
          <a className="link" href="/Reptile">Click Here To Add a Snake</a>
        </li>
        <h3 className='content'>If you want to create a husbandry record to keep track of your slithering reptiles size, click below!</h3>
        <li id="husbandry">
          <a className="link" href="/husbandryRecords">Click Here To Add a Husbandry Record</a>
        </li>
        <h3 className='content'> If you want to add a feeding schedule, click right down here!</h3>
        <li id="schedule">
          <a className="link" href="/Schedules">Click Here To Add a Schedule</a>
        </li>
        
      </ul>
      <div className="footer"></div>
    </body>
  );
};