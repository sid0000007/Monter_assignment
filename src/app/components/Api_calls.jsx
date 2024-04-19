"use client"
import React, { useState, useEffect } from 'react';
import ReportTable from './Table';

const Header = () => {

    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users"); // Assuming data.json is in the public folder
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    <ReportTable reports={data}/>
    </>
  )
}

export default Header