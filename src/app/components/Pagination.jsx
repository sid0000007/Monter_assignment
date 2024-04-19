"use client"
import React, { useState } from 'react'

function Pagination({ postperpage, totalpost, paginate }) {
    const pageNumber = [];

    //created a page numbered array 
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        pageNumber.push(i);
    }

    const [activepage, setActivepage] = useState(1);

    //handle onclick

    const handlePageClick = (number) => {
        setActivepage(number);
        paginate(number);
    }
    return (
        <div>
            <nav>
                <ul className="pagination flex align-middle justify-center my-10 ">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-6 h-6 py-0 border-gray-400 border-2 rounded-lg">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    {
                        pageNumber.map((number) => (
                            <li key={number} className={`page-item ${activepage ===  number? "active":""}`}>
                                <a className="page-link px-2 mx-1 border-2 border-gray-400 w-10 h-10 rounded-lg" href="#" onClick={() => {
                                    handlePageClick(number);
                                    paginate(number);
                                }}>{number}</a>
                            </li>
                        ))
                    }
                    <button title="next" type="button" className="inline-flex items-center justify-center w-6 h-6 py-0 border-gray-400 border-2 rounded-lg">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination