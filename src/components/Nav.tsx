import React from 'react';

export const Navbar = () => {
    return (
        <nav className="bg-violet-900">
            <div className="p-6 mb-8">
                <ul className="flex justify-end">
                    <li className="mr-6">
                        <a className="text-2xl font-bold text-white" href="/">Home</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-2xl font-bold text-white" href="/posts">Posts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
