document.addEventListener('DOMContentLoaded', function () {
    const voidboardContainer = document.getElementById('voidboard');

    // Function to create sticky notes on the voidboard
    function createStickyNote() {
        const note = document.createElement('div');
        note.classList.add('sticky-note');
        note.style.left = `${Math.random() * 80}%`; // Random position
        note.style.top = `${Math.random() * 80}%`;
        note.textContent = 'New Sticky Note';
        voidboardContainer.appendChild(note);

        // Enable dragging of sticky note
        note.addEventListener('mousedown', function (e) {
            const offsetX = e.clientX - note.offsetLeft;
            const offsetY = e.clientY - note.offsetTop;

            function dragMove(e) {
                note.style.left = `${e.clientX - offsetX}px`;
                note.style.top = `${e.clientY - offsetY}px`;
            }

            function dragEnd() {
                document.removeEventListener('mousemove', dragMove);
                document.removeEventListener('mouseup', dragEnd);
            }

            document.addEventListener('mousemove', dragMove);
            document.addEventListener('mouseup', dragEnd);
        });
    }

    // Add sticky notes after a few seconds (for demo purposes)
    setTimeout(createStickyNote, 1000);
    setTimeout(createStickyNote, 3000);
});
