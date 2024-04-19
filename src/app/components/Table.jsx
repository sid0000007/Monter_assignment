"use client"
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const ReportTable = () => {

    const [reports, setData] = useState("");
    const [loading, setLoading] = useState(true);

    const [currentpage, setCurrentage] = useState(1);
    const [postperpage, setPostperpage] = useState(9);

    //handle the page size evenet
    const handlePageSize = (event) => {
        setPostperpage(event.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums"); // Replace with your API endpoint
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchData();
    }, []);


    //setting up the ideal number of entries needs to be displayed.
    const indexoflastpost = currentpage * postperpage;
    const indexoffirstpost = indexoflastpost - postperpage;
    const currentreport = reports.slice(indexoffirstpost, indexoflastpost);

    //pagination function
    const paginate = (pageNumber) => setCurrentage(pageNumber);
    console.log(reports);
    return (
        <>
            <div className="table-container">
                <table className="report-table">
                    <thead>
                        <tr className="columns">
                            <th>Date</th>
                            <th>Report Name</th>
                            <th className="download">Download File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports && currentreport.map((report, index) => (
                            <tr key={index}>
                                <td><ul className="flex flex-col">
                                    <li>24/04/{report.id}</li>
                                    <li className="text-xs">16:0{index} PM</li>
                                </ul>
                                </td>
                                <td>{report.title}{report.id}.csv</td>
                                <td>
                                    <button className="">
                                        <img className="file rounded-lg w-6" src="/download.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            <div className=' border-t-2 my-10'>
            <div className="container flex justify-between h-16 mx-automy-10 ">
                    <ul className="items-stretch hidden space-x-3 lg:flex justify-center align-middle ml-64">
                    </ul>
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <Pagination
                            postperpage={postperpage}
                            totalpost={reports.length}
                            paginate={paginate}
                        />
                    </a>
                    <div className="flex items-center md:space-x-4">
                        <div className="my-10 ml-20 mr-0 flex">
                            <p className='mr-2'>Rows per page </p>
                            <select onClick={handlePageSize} className='text-sm h-7 w-8 border-2 second border-gray-400'>
                                <option value="8">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportTable;