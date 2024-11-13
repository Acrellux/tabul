// Function to add a new event to the timeline
function addEvent() {
    const timeline = document.getElementById('timeline');
    
    // Create a new div element for the event
    const newEvent = document.createElement('div');
    newEvent.classList.add('event', 'future');
    
    // Set random position along the timeline for the new event
    newEvent.style.top = Math.random() * 300 + 'px';
    newEvent.style.left = Math.random() * 800 + 'px';
    
    // Set content for the event
    newEvent.innerText = 'New Event';
    
    // Append the new event to the timeline
    timeline.appendChild(newEvent);
}

// Event listener for adding a new event on button click
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addEventButton');
    addButton.addEventListener('click', addEvent);
});
