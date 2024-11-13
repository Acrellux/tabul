import React from 'react';
import Timeline from './components/Timeline';
import Voidboard from './components/Voidboard';

function App() {
    return (
        <div>
            <header style={{ backgroundColor: '#00BCD4', color: 'white', padding: '20px', textAlign: 'center' }}>
                <h1>Welcome to Tabul App!</h1>
            </header>
            <div style={{ padding: '20px' }}>
                <h2>Timeline – Voidboard</h2>
                <Timeline />
                <Voidboard />
            </div>
        </div>
    );
}

export default App;
