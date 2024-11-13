import React from 'react';

const Body = ({ color }) => {
    return (
        <div className={`w-full h-screen ${color} flex items-center justify-center snap-start`}>
            <h1 className="text-white text-center">Contenido del Body</h1>
        </div>
    );
};

export default Body;