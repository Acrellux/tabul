import React from 'react';

function Timeline() {
    return (
        <div style={{ position: 'relative', margin: '20px 0', height: '400px', borderLeft: '2px solid #00BCD4' }}>
            <div style={{ position: 'absolute', top: '50px', left: '200px', backgroundColor: '#A89F91', color: 'white', padding: '10px', borderRadius: '5px' }}>
                Future Event 1
            </div>
            <div style={{ position: 'absolute', bottom: '50px', left: '400px', backgroundColor: '#FFCDD2', color: 'white', padding: '10px', borderRadius: '5px' }}>
                Past Event 1
            </div>
        </div>
    );
}

export default Timeline;
