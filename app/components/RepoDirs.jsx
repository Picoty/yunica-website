// import React from 'react'
// import Link from 'next/link';


// async function fetchRepoContents(name){

//     await new Promise((resolve) => setTimeout(resolve, 3000))
    
//     const token = 'GitHub__PAT_TOKEN'; 
//     // const response = await fetch('https://api.github.com/repos/bradtraversy/${name}/contents');
//     const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
//         headers: {
//             'Authorization': `token ${token}`
//         }
//     });

//     if (!response.ok) {
//         console.log('Hello, world!')
//         // throw new Error('Network response was not ok');
//     }

//     const contents = await response.json();
//     return contents;
// }

// const RepoDirs = async (name) => {
//     const contents = await fetchRepoContents(name);
//     //console.log(contents);
//     //  const dirs = contents
//      const dirs = contents.filter((content) => content.type === 'dir')

//   return (
//     <>
//     <h3>Directories</h3>
//     <ul>
//         {dirs.map((dir) => (
//             <li key={dir.path}>
//             <Link href = '/code/repos/${repo.name/${dir.path}'>
//             {dir.path}
//             </Link>
//             </li>
//         ))} 
//     </ul>
//     </>
//   )
// }

// export default RepoDirs

// RepoDirs.jsx








"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const token = 'GitHUB_PAT_TOKEN'; // Replace with your actual token
    
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
        headers: {
            'Authorization': `token ${token}`
        },
        
        next: {
            revalidate: 60,
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const contents = await response.json();
    return contents;
}

const RepoDirs = ({ name }) => {
    const [dirs, setDirs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contents = await fetchRepoContents(name);
                const directories = Array.isArray(contents) ? contents.filter((content) => content.type === 'dir') : [];
                setDirs(directories);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [name]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs;
