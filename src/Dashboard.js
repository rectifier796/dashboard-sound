import React from 'react';
import DashboardItem from './DashboardItem';
import BarChart from './BarChart';
import './Dashboard.css';

const data = [
  {
    image: './pixels1.jpg',
    title: 'Sound 1',
    uniquePlays: 8,
    totalPlays: 13,
    completionRate: 47,
  },
  {
    image: './pixels2.jpg',
    title: 'Sound 2',
    uniquePlays: 8,
    totalPlays: 13,
    completionRate: 64,
  },
  {
    image: './pixels3.jpg',
    title: 'Sound 3',
    uniquePlays: 23,
    totalPlays: 29,
    completionRate: 34,
  },
  {
    image: './pixels4.jpg',
    title: 'Sound 4',
    uniquePlays: 5,
    totalPlays: 12,
    completionRate: 57,
  },
  
  // add more items as needed
];

function Dashboard() {
  const uniquePlaysData = data.map((item) => ({
    name: item.title,
    value: item.uniquePlays,
  }));

  const totalPlaysData = data.map((item) => ({
    name: item.title,
    value: item.totalPlays,
  }));

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className='container'>
        <div className='cont1'>
      <h2>Unique Plays</h2>
      <BarChart data={uniquePlaysData} />
      </div>
      <div className='cont2'>
      <h2>Total Plays</h2>
      <BarChart data={totalPlaysData} />
      </div>
      </div>
      <div className='cont3'>
      {data.map((item) => (
        <DashboardItem key={item.title} {...item} />
      ))}
      </div>
    </div>
  );
}

export default Dashboard;
