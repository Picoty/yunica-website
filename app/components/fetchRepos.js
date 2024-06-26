// fetchAndLogRepoContents.js

async function fetchRepoContents(name) {
    const token = 'GitHub__PAT_TOKEN'; 
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
        headers: {
            'Authorization': `token ${token}`
        }
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const contents = await response.json();
    return contents;
}

async function logRepoContents(name) {
    try {
        const contents = await fetchRepoContents(name);
        // console.log(contents[0]); // Log the contents to the console
        const dirs = contents.filter((content) => content.type === 'dir')
        console.log(dirs)
    } catch (error) {
        console.error("Error fetching repository contents:", error);
    }
}

// Example usage
logRepoContents('50projects50days'); // Replace 'some-repo-name' with the actual repo name