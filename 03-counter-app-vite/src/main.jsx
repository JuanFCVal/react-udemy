import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return <h1>Hola mundo</h1>
};
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.strictMode>
        <App />
    </React.strictMode>
);