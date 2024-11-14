document.addEventListener('DOMContentLoaded', function () {
    const timelineContainer = document.getElementById('timeline');

    // Dummy event data
    const events = [
        { time: '2024-11-10', title: 'Event 1', color: '#ff5733' },
        { time: '2024-11-15', title: 'Event 2', color: '#33ff57' },
        { time: '2024-11-20', title: 'Event 3', color: '#5733ff' }
    ];

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.style.backgroundColor = event.color;
        eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.time}</p>`;
        timelineContainer.appendChild(eventDiv);
    });
});
