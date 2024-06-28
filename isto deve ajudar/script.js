// Simulate active user count (replace with actual data)
const minUsers = 50;
const maxUsers = 200;

function getRandomUsers() {
    return Math.floor(Math.random() * (maxUsers - minUsers + 1)) + minUsers;
}

function updateActiveUsers() {
    const activeUsersElement = document.getElementById('activeUsers');
    const activeUsers = getRandomUsers();
    activeUsersElement.textContent = `Active Users: ${activeUsers}`;
}

// Initial update
updateActiveUsers();

// Update every 5 seconds (adjust as needed)
setInterval(updateActiveUsers, 5000);
