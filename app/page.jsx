'use client';
import React, { useState, useEffect } from 'react';
import CourseSearch from './components/CourseSearch';
import Courses from './components/Courses';


const Homepage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchCourses();
  }, []);

  const handleSearchResults = (searchResults) => {
    setCourses(searchResults);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to Yunica's website</h1>
      <CourseSearch getSearchResults={handleSearchResults} />
      <Courses courses={courses} />
    </div>
  );
};

export default Homepage;
