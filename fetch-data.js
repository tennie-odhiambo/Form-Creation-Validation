document.addEventListener('DOMContentLoaded', function () {
    // Define the async function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
        const dataContainer = document.getElementById('api-data');  // Container for displaying data
        
        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();  // Parse the response as JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create an unordered list to display users
            const userList = document.createElement('ul');
            
            // Loop through each user and create a list item for each
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;  // Set the list item's text to the user's name
                userList.appendChild(listItem);  // Append the list item to the list
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle any errors
            dataContainer.innerHTML = 'Failed to load user data.';  // Display error message
        }
    }

    // Call the function to fetch user data when the page loads
    fetchUserData();
});