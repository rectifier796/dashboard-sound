import React from 'react';

function DashboardItem({ image, title, uniquePlays, totalPlays, completionRate }) {
  return (
    <div className="dashboard-item">
      <img src={image} alt="Thumbnail" />
      <h2>{title}</h2>
      <p>Unique Plays: {uniquePlays}</p>
      <p>Total Plays: {totalPlays}</p>
      <progress value={completionRate} max="100" />
    </div>
  );
}

export default DashboardItem;
