import React from 'react';
import Link from 'next/link';

const Navbar = ({ botonLogin }) => {
    return (
        <div className="w-full bg-blue-600 p-4 fixed top-0 left-0">
            <h1 className="text-white text-center">Navbar</h1>
            
            {botonLogin && (
                <Link href="/login">
                    <button className="bg-red-500 text-white p-2 rounded">Login</button>
                </Link>
            )}

        </div>
    );
};

export default Navbar;
