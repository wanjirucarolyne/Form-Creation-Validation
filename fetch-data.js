document.addEventListener("DOMContentLoaded", function () {
    // Define the async function to fetch user data
    async function fetchUserData() {
        // API endpoint URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        // Select the container where data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch user data from the API
            const response = await fetch(apiUrl);
            // Convert response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to display the user list
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the user's name as the text content
                userList.appendChild(listItem);   // Append <li> to the <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by displaying an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData when the DOM has fully loaded
    fetchUserData();
});
