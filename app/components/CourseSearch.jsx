'use client';
import React, { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
    const [query, setQuery] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const res = await fetch(`/api/courses/search?query=${query}`);
      const courses = await res.json();
    getSearchResults(courses);
    };

    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input 
                type="text" 
                className='search-input' 
                placeholder='Search Course...'
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Fix: pass 'e' to setQuery
            />
            <button className='search-button' type='submit'>Search</button> {/* Fix: className should be 'search-button' */}
        </form>
    );
};

export default CourseSearch;
